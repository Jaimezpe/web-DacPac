# web-DacPac
Bienvenidos a la web de DacPac 🤘

## Cómo colaborar

### Ejecutar en local
1. Instalar `node.js  (LTS)` desde [aquí](https://nodejs.org/en/download/prebuilt-installer)
2. Checkear que se ha instalado bien el `npm` usando `npm --version`
3. Cambiar a la carpeta del proyecto `cd web-dacpac`
4. Instalar los paquetes usando `npm install`
5. Ejecutar la web en local usando `npm run dev`

### Compilar para la nube
1. Instalar todo lo necesario para correr en local
2. Ejecutar `npm run build`
3. (Opcional) Servir la web compilada usando `npx serve -s dist` (seguramente tengas que instalarte algún paquete más)
4. Publicar en el entorno que sea los archivos que se generan en la carpeta `/dist`


## Notas
Por si alguna vez nos hace falta, el proyecto lo hemos creado con:
```bash
npm create vite@latest web-dacpac
- React
- TypeScript (no SWC)
```
Estamos usando las versiones:
- Node.js `v20.17.0`
- npm `10.8.3`

