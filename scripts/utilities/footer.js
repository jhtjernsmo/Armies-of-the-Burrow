 const footer = document.querySelector("#footer");

 const showFooter = () => {
     footer.innerHTML = `
    <section>
         <p><a href="https://github.com/jhtjernsmo" target="_blank"><i class="fa-brands fa-github fa-2xl"></i></a></p>
    </section>
     `;
 }

 export default showFooter;