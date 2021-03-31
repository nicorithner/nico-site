import { BrowserRouter, Route, Link } from 'react-router-dom';
import ProjectDetail from '../projectDetail/ProjectDetail.js';
import '../../App.css';

 function Thumbnail(props) {
   return (
    <BrowserRouter>
     <div className="project">
      <Route exact path= { props.link } component={ ProjectDetail } />
       <Link to={props.link}>
         <div className="project-image">
          <img src={props.image} alt="Descriptive media" width="300" height="auto"/>
         </div>
         <div className="project-title">{props.title}</div>
         <div className="project-category">{props.category}</div>
             </Link>
     </div>
    </BrowserRouter>
  )
}

export default Thumbnail;

