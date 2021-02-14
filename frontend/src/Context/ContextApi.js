import React, { createContext } from "react";
import { useFetch } from "./useFetch";
export const Context = createContext();
// CONTEXT API
function Provider(props) {
  const gloves = useFetch(
    `https://erkanisufreakt.azurewebsites.net/products/gloves/`
  );
  const facemasks = useFetch(
    `https://erkanisufreakt.azurewebsites.net/products/facemasks/`
  );
  const beanies = useFetch(
    `https://erkanisufreakt.azurewebsites.net/products/beanies/`
  );

  return (
    <Context.Provider
      value={{
        facemasks: facemasks.error ? [] : facemasks.data,
        gloves: gloves.error ? [] : gloves.data,
        beanies: beanies.error ? [] : beanies.data,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
export default Provider;
