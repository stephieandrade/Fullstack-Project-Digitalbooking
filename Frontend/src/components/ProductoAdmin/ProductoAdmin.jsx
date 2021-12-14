import { useContext, useState, useEffect } from "react";
import { Contexto } from "../Contexto/Contexto";
import BloqueHome from "../BloqueHome/BloqueHome";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Redirect } from "react-router";
import { useFetch } from "use-http";
import PoliticasAdmon from "../PoliticasAdmon/PoliticasAdmon";
import TituloProducto from "../TituloProducto/TituloProducto";
import FormularioProducto from "../FormularioProducto/FormularioProducto";
import ClonadorIconos from "../ClonadorIconos/ClonadorIconos";
import ClonadorImagenes from "../ClonadorImagenes/ClonadorImagenes";
import useService from "../../hooks/useService";
import { useHistory } from "react-router-dom";

import Boton from "../Boton/Boton";
import "./producto-admin.scoped.css";

export default function ProductoAdmin() {
  const [session, setSession] = useLocalStorage("session", {});
  const { estado, setEstado } = useContext(Contexto);
  const [jwt] = useLocalStorage("jwt");

  const history = useHistory();

  const {
    api: getProductos,
    data: productos,
    cache,
    response: responseProductos,
  } = useService();

  // Preparo la llamada al API con el Bearer
  const options = {
    interceptors: {
      request: async ({ options }) => {
        options.headers.Authorization = `Bearer ${jwt}`;
        return options; // returning the `options` is important
      },
      response: async ({ response }) => {
        const res = response;
        return res;
      },
    },
  };
  const { post, get, response } = useFetch(
    process.env.REACT_APP_API_URL,
    options
  );

  const [ciudades, setCiudades] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [formulario, setFormulario] = useState({});
  const [validar, setValidar] = useState(0);

  const [formError, setFormError] = useState(false);

  // Indica la cantidad de formularios que han reportado su data
  // Hay 4... FormularioProducto, CLonadorIconos, CLonadorImagenes, PolitcasAdmon
  const [contador, setContador] = useState(-1);

  const crearProducto = async () => {
    // Preparar el JSON al formato adecuado
    let {
      nombre,
      descripcion,
      normas,
      saludYSeguridad,
      politicaCancelacion,
      direccion,

      categoria,
      ciudad,
      imagenes,
      caracteristicas,
    } = formulario;

    const listadeimagenes = imagenes?.map((imagen) => ({
      titulo: imagen.titulo,
      urlImagen: imagen.imagen,
    }));
    caracteristicas = caracteristicas?.map((caracteristica) => ({
      nombre: caracteristica.nombre,
      icono: caracteristica.icono,
    }));

    const payload = {
      nombre: nombre.value,
      descripcion: descripcion.value,
      normas: normas.value,
      saludYSeguridad: saludYSeguridad.value,
      politicaCancelacion: politicaCancelacion.value,
      direccion: direccion.value,
      categoria: { categorias_id: categoria.value },
      ciudad: { ciudades_id: ciudad.value },
      listadeimagenes,
      caracteristicas,
      puntuaciones: [],
      listadereservas: [],
    };

    console.log(JSON.stringify(payload));

    const data = await post("/productos", payload);
    if (response.ok) {
      cache.clear();
      await getProductos({ resource: "/productos" });
    } else {
      alert(
        "Lamentablemente, el producto no ha podido crearse. Por favor, intente más tarde."
      );
    }
  };

  // Al recibir respuesta de los endPoints actualizamos el contexto, incluimos la sessión
  useEffect(() => {
    if (JSON.stringify(responseProductos) !== "{}") {
      setEstado((estado) => ({
        ...estado,
        productos,
      }));
      history.push("/productoExitoso");
    }
  }, [productos]);

  const validarFormulario = () => {
    let error = false;
    const indices = [
      "nombre",
      "direccion",
      "categoria",
      "ciudad",
      "descripcion",
      "normas",
      "saludYSeguridad",
      "politicaCancelacion",
    ];

    indices.forEach((indice) => {
      error = formulario[indice]?.error !== false || error;
    });

    // Aqui validamos los atributos
    formulario["caracteristicas"]?.forEach((caracteristica) => {
      error = caracteristica?.error !== false || error;
    });

    // Aqui validamos los imagenes
    formulario["imagenes"]?.forEach((imagen) => {
      error = imagen?.error !== false || error;
    });

    return error;
  };

  const {
    api: getCiudades,
    data: ciudadesData,
    response: responseCiudades,
  } = useService();

  const {
    api: getCategorias,
    data: categoriasData,
    response: responseCategorias,
  } = useService();

  useEffect(() => {
    setEstado((estado) => ({ ...estado, session }));
  }, [session]);

  useEffect(() => {
    if (JSON.stringify(formulario) === "{}") {
      return;
    }
    console.log("[UPDATE FORMULARIO]");

    console.log(formulario);
    let error = validarFormulario();
    console.log("HAY ERROR EN EL FOMR? " + error);

    //setFormError(error);
  }, [formulario]);

  // Evaluar si en el contexto tenemos ciudades y categorías, sino las traemos del API (seguramente refrescaron la página)
  useEffect(() => {
    if (!estado.categorias) {
      getCategorias({ resource: "/categorias" });
    } else {
      updateCategorias(estado.categorias);
    }
    if (!estado.ciudades) {
      getCiudades({ resource: "/ciudades" });
    } else {
      updateCiudades(estado.ciudades);
    }
  }, []);

  const updateCategorias = (data) => {
    setCategorias(
      data.map((elem) => ({
        value: elem.categorias_id,
        text: elem.titulo,
      }))
    );
  };

  const updateCiudades = (data) => {
    setCiudades(
      data.map((elem) => ({
        value: elem.ciudades_id,
        text: elem.nombre + " - " + elem.nombre_pais,
      }))
    );
  };

  useEffect(() => {
    // TODO: Si no se hace con callback, se pierde el estado de session
    if (categoriasData && categoriasData.length > 0) {
      updateCategorias(categoriasData);
    }
  }, [categoriasData]);

  useEffect(() => {
    // TODO: Si no se hace con callback, se pierde el estado de session
    console.log("CONTADOR ", contador);
    if (contador === 0) {
      setValidar((validar) => validar + 1);
    }

    if (contador === 4) {
      console.log(JSON.stringify(formulario));
      console.log("FORMULARIO COMPLETO");
      let error = validarFormulario();
      if (!error) {
        console.log("SE ENVIA FORMULARIO");
        crearProducto();
      }
    }
  }, [contador]);

  useEffect(() => {
    // TODO: Si no se hace con callback, se pierde el estado de session
    if (ciudadesData && ciudadesData.length > 0) {
      updateCiudades(ciudadesData);
    }
  }, [ciudadesData]);

  const handleClick = (e) => {
    console.log("handleClick");
    setContador(0);
    // Para todos los componentes validar si están completos o no
  };

  const getData = (data) => {
    console.log("GET DATA");
    setFormulario((formulario) => ({ ...formulario, ...data }));
    setContador((contador) => contador + 1);

    // Si data es un objeto se desestructura normal
  };

  // TODO: Revisar el tema de la sesión, deshabilitado temporalmente
  if (session?.roles && session.roles[0]?.authority === "ROLE_ADMIN") {
    return (
      <>
        <TituloProducto titulo={"Administración"} />

        <BloqueHome className="producto-admin">
          <h3 className="tituloImagenes">Crear auto</h3>
          <div className="contenedorFormulario">
            <FormularioProducto
              ciudades={ciudades}
              categorias={categorias}
              validar={validar}
              getData={getData}
            />
          </div>
          <h3 className="tituloImagenes">Agregar Atributos</h3>
          <div className="contenedorClonador">
            <ClonadorIconos validar={validar} getData={getData} />
          </div>

          <PoliticasAdmon validar={validar} getData={getData} />

          <h3 className="tituloImagenes">Cargar Imágenes</h3>
          <div className="contenedorClonador">
            <ClonadorImagenes validar={validar} getData={getData} />
          </div>

          <div className="contenedorBoton">
            <Boton
              className="button2 crear-producto"
              nombre="Crear"
              link={handleClick}
            />
          </div>
        </BloqueHome>
      </>
    );
  }

  return <Redirect to="/" />;
}
