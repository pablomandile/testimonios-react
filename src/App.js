import './App.css';
import Testimonio from './componentes/testimonio'

function App() {
  return (
    <div className="App">
        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen nuestros alumnos de nosotros</h1>
          <Testimonio 
            nombre='Aida Borsch'
            pais='Suecia'
            imagen='Aida'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante nunc, semper a varius dapibus, imperdiet at enim. Fusce quis tortor mi. Nunc egestas, nibh eget auctor eleifend, velit dui facilisis neque, non iaculis sem justo a enim. Donec sed turpis laoreet, eleifend ligula vel, ultricies nibh. Cras sed lacus volutpat, egestas massa eget, consectetur erat. Suspendisse urna dolor, tincidunt eget augue ut, pretium dictum sem. Nunc finibus est nec hendrerit sagittis. Mauris venenatis lacinia magna, ac scelerisque felis egestas quis. Morbi in fermentum lectus.' />
          <Testimonio 
            nombre='Jimmy Egestas'
            pais='North América'
            imagen='Jimmi'
            cargo='Proyect manager'
            empresa='Avast'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante nunc, semper a varius dapibus, imperdiet at enim. Fusce quis tortor mi. Nunc egestas, nibh eget auctor eleifend, velit dui facilisis neque, non iaculis sem justo a enim. Donec sed turpis laoreet, eleifend ligula vel, ultricies nibh. Cras sed lacus volutpat, egestas massa eget, consectetur erat. Suspendisse urna dolor, tincidunt eget augue ut, pretium dictum sem. Nunc finibus est nec hendrerit sagittis. Mauris venenatis lacinia magna, ac scelerisque felis egestas quis. Morbi in fermentum lectus.' />
            <Testimonio 
            nombre='Sara Ortiz'
            pais='España'
            imagen='Sara'
            cargo='Account manager'
            empresa='Facebook'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante nunc, semper a varius dapibus, imperdiet at enim. Fusce quis tortor mi. Nunc egestas, nibh eget auctor eleifend, velit dui facilisis neque, non iaculis sem justo a enim. Donec sed turpis laoreet, eleifend ligula vel, ultricies nibh. Cras sed lacus volutpat, egestas massa eget, consectetur erat. Suspendisse urna dolor, tincidunt eget augue ut, pretium dictum sem. Nunc finibus est nec hendrerit sagittis. Mauris venenatis lacinia magna, ac scelerisque felis egestas quis. Morbi in fermentum lectus.' />
       <Testimonio 
            nombre='Richard Stevenson'
            pais='Inglaterra'
            imagen='Richard'
            cargo='Chief excecutive officer'
            empresa='Caramel'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante nunc, semper a varius dapibus, imperdiet at enim. Fusce quis tortor mi. Nunc egestas, nibh eget auctor eleifend, velit dui facilisis neque, non iaculis sem justo a enim. Donec sed turpis laoreet, eleifend ligula vel, ultricies nibh. Cras sed lacus volutpat, egestas massa eget, consectetur erat. Suspendisse urna dolor, tincidunt eget augue ut, pretium dictum sem. Nunc finibus est nec hendrerit sagittis. Mauris venenatis lacinia magna, ac scelerisque felis egestas quis. Morbi in fermentum lectus.' />
       <Testimonio 
            nombre='Teresa García'
            pais='Mexico'
            imagen='Teresa'
            cargo='Software engeneer'
            empresa='Oasis'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante nunc, semper a varius dapibus, imperdiet at enim. Fusce quis tortor mi. Nunc egestas, nibh eget auctor eleifend, velit dui facilisis neque, non iaculis sem justo a enim. Donec sed turpis laoreet, eleifend ligula vel, ultricies nibh. Cras sed lacus volutpat, egestas massa eget, consectetur erat. Suspendisse urna dolor, tincidunt eget augue ut, pretium dictum sem. Nunc finibus est nec hendrerit sagittis. Mauris venenatis lacinia magna, ac scelerisque felis egestas quis. Morbi in fermentum lectus.' />
       <Testimonio 
            nombre='Robert Nilsen'
            pais='Suecia'
            imagen='Robert'
            cargo='Community manager'
            empresa='Axxon'
            testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ante nunc, semper a varius dapibus, imperdiet at enim. Fusce quis tortor mi. Nunc egestas, nibh eget auctor eleifend, velit dui facilisis neque, non iaculis sem justo a enim. Donec sed turpis laoreet, eleifend ligula vel, ultricies nibh. Cras sed lacus volutpat, egestas massa eget, consectetur erat. Suspendisse urna dolor, tincidunt eget augue ut, pretium dictum sem. Nunc finibus est nec hendrerit sagittis. Mauris venenatis lacinia magna, ac scelerisque felis egestas quis. Morbi in fermentum lectus.' />
      </div>
    </div>
  );
}

export default App;
