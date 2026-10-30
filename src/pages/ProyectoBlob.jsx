import { useState } from 'react';

function ProyectoBlob() {
  const [blob, setBlob] = useState(null);
  const [mensaje, setMensaje] = useState('Todavía no se creó ningún Blob.');

  // 1. Crear un Blob de texto
  function crearBlob() {
    const nuevoBlob = new Blob(['Hola, este es mi primer Blob en React'], { type: 'text/plain' });
    setBlob(nuevoBlob);
    setMensaje('Blob creado. Tamaño: ' + nuevoBlob.size + ' bytes. Tipo: ' + nuevoBlob.type);
  }

  // 2. Descargar el Blob como archivo
  function descargarBlob() {
    if (blob === null) {
      setMensaje('Primero tenés que crear el Blob.');
      return;
    }
    const url = URL.createObjectURL(blob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = 'mi-blob.txt';
    enlace.click();
    URL.revokeObjectURL(url);
    setMensaje('Blob descargado como mi-blob.txt');
  }

  // 3. Usar slice() para cortar una parte del Blob
  async function usarSlice() {
    if (blob === null) {
      setMensaje('Primero tenés que crear el Blob.');
      return;
    }
    const parte = blob.slice(0, 4);
    const texto = await parte.text();
    setMensaje('Con slice(0, 4) se obtuvo: "' + texto + '"');
  }

  return (
    <div>
      <h1>Ejemplo de uso de Blobs</h1>
      <div className="botones">
        <button onClick={crearBlob}>Crear Blob de texto</button>
        <button onClick={descargarBlob}>Descargar Blob</button>
        <button onClick={usarSlice}>Usar slice()</button>
      </div>
      <div className="resultado">{mensaje}</div>
    </div>
  );
}

export default ProyectoBlob;