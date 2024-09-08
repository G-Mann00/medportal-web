// Con este componente, se definen los titulos de las paginas de la aplicacion

import { useEffect } from "react";

function DocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
export default DocumentTitle;
