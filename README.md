# pokemon-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Resumen 
* La pokedex fue creada en vue V2 compilada con babel utilizando vue Router 
para el manejo de las rutas, vuex para el manejo de los estados acciones mutaciones y getter que se requerian, 
se utilizo tambien vuex persist para poder persistir el estado y cuando se cargue la pagina no se pierdan 
los estados anteriores. 

para la parte del diseño se utilizo Boostrap vue y estilos en sass compilado con node sass 
se utilizo axios para realizar la promesa alos  endpoints, para realizar el buscador se filtro el arreglo 
que se obtenia del endpoints y de favorites para luego con la funcion match poder buscar por letra 
o por coincidencia el pokemon. 