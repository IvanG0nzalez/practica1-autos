import { enviar, enviar_auto } from "./Conexion";
import { save, saveToken, getToken } from "./SessionUtil";

export async function inicio_sesion(data) {
    const sesion = await enviar('index.php', data);
    if (sesion && sesion && sesion.code === 200 && sesion.jwt) {
        saveToken(sesion.jwt);
        save('externalUser', sesion.external);
        save('user', sesion.usuario);
    }
    return sesion;
}

export async function registrar_auto(data) {
    const response = await enviar_auto('index.php', data, getToken());
    console.log(response);
    return response;
  }