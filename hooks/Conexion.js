let URL = "https://computacion.unl.edu.ec/pdml/practica1/";
export function url_api() {
  return URL;
}
//noticias
//recursos
export async function enviar(recurso, data) {
  let headers = []
  headers = {
    "Accept": "application/json",
  };
  

  const response = await fetch(URL + recurso, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function obtener(recurso) {
  const response = await fetch(URL + recurso);
  return await response.json();
}

export async function enviar_auto(recurso, data, token='') {
  let headers = []
  if(token !== '') {
    headers = {
      "Accept": "application/json",
    };
  } else {
    headers = {
      "Accept": "application/json",
      "TOKEN-KEY": token
    };
  }
  

  const response = await fetch(URL + recurso, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });
  return await response.json();
}