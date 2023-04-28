$('.carousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });
    let heading1=document.getElementById('heading1');
    console.log(heading1)
    heading1.addEventListener('mouseover',()=>{
        alert("bhanurakash");
    })
    let indexdiv=document.getElementById('indexdiv');
    let count=0;
    function bhanuprakash()
    {   
        indexdiv.classList.add('indexdiv2');
    }
    function closing()
    {
        indexdiv.classList.remove('indexdiv2');
    }

    window.addEventListener('scroll',()=>{
        // const triggerBotton= window.innerHeight / 5 *4;
        // const imagetop1=image1.getBoundingClientRect().top;
        // const imagetop2=image2.getBoundingClientRect().top;
        // console.log("image1top"+imagetop1);
        // console.log("image2top"+imagetop2);
        // console.log("triggerbooton"+triggerBotton);
       let value= window.scrollY;

       console.log("value is"+ value);  
       if(value>70)
       {
        
       }
       })