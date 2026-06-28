//variables para almacenar los todos
let todos =[
    {id:1, descripcion: "hacer la tarea de matematicas"},
    {id: 2, descripcion: "lavar los platos"},
    {id: 3, descripcion: "Pagar la facturas"},
    ];
    
    // creacion de la funcion para listar los todos
    function listarTodos(){
    let tareas= "";
    
    //recorremos el arreglo de los todos
    for(let i=0; i< todos.length; i++){
    //concatenamos el d y la descripcion del cada todo
    tareas  += `${todos[i].id}:  ${todos[i].descripcion}\n`;
    
    console.log(tareas)
    }
    }
    
    //funciones para insertar un todo
    function insertarTodo(){
      //pedimos al usuario el id y la descripcion
      let id= prompt ("Ingrese el ID del todo:");
      let descripcion = prompt ("Ingrese la descripcion del todo:");
      //si ambos valores existen
      if(!id||!descripcion){
        console.log ("Ingrese los valores id y descripcion");
        return;
      }
      if(isNaN (id)){
        console.log("Ingresa el valor numero para el id");
        return;
      }
      //agregamos el nuevo todo al arreglo todos
      todos.push ({id:id, descripcion: descripcion});
      console.log("Todo insertado");
    }
    
    //insertarObjeto({id: 4, descripcion: "Objeto 4"});//parametro para funciones lo que no necesitaremos utilizar console,log
    
    
    
    // function para eliminar el todo
     function eliminarTodo(){
      //pedimos al usuaro del id a eliminar
      let id= prompt ("Ingrese el id del todo a eliminar:");
      //recorremos el arreglo de todos
      for (let i= 0 ; i < todos.length ; i++){
        // si el id del todo es actual al id del todo a eliminar
        if(todos[i].id ===id){
          //eliminar el todo del arreglo
          todos.splice (i,1);
          console.log("Todo eliminado");
          break;
        }
      }
    }
    
    //llamamos a las funciones para ejecutar acciones
    listarTodos();
    insertarTodo();
    eliminarTodo();
    