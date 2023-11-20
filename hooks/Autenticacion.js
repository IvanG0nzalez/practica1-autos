import { enviar, enviar_auto } from "./Conexion";
import { save, saveToken } from "./SessionUtil";

export async function inicio_sesion(data) {
    const sesion = await enviar('index.php', data);
    if (sesion && sesion && sesion.code === 200 && sesion.jwt) {
        saveToken(sesion.jwt);
        save('id', sesion.external);
        save('user', sesion.usuario);
    }
    return sesion;
}

export async function registrar_auto(data) {
    const response = await enviar_auto('index.php', data, getToken());
    if (response && response.code === 200 && response.jwt) {
        //TODO
      saveToken(response.jwt);
      save('id', response.external);
      save('user', response.usuario);
    }
    return response;
  }