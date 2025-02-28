
function ListItem1(props) {

    return (
      <section>
         <div class="list-item">
      <img src="https://cdn.futura-sciences.com/cdn-cgi/image/width=1920,quality=60,format=auto/sources/AdobeStock_314829332.jpeg" alt="Créativité"/>
      <div>
        <h3> {props.titre}</h3>
        <p>{props.description}</p>
      </div>
    </div>
      </section>
    )}
  
  export default ListItem1