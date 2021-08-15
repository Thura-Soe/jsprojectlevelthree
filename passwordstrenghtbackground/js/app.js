// UI 
const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');

// Event Listener 
password.addEventListener('input', (e)=>{
    // console.log('hay');
    // console.log(e.target.value);

    const input = e.target.value;
    const inlength = input.length;
    // console.log(inlength);

    // console.log(20 - inlength * 2);

    const blurvalue = 20 - (inlength * 2) ;

    background.style.filter = `blur(${blurvalue}px)`;

    // const sc = scale(inlength, 0, 10, 20, 0);
    // console.log(sc);
    // background.style.filter = `blur(${sc}px)`;
});


// const scale = (num, inmin, inmax, outmin, outmax)=>{
//     return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin; 
// };


eyeicon.addEventListener('click', (e)=>{
    if(eyeicon.classList.contains('fa-eye')){
        // console.log('show password');

        // Method 1
        // eyeicon.classList.remove('fa-eye');
        // eyeicon.classList.add('fa-eye-slash');

        // Method 2 
        eyeicon.classList.replace('fa-eye','fa-eye-slash');

        password.setAttribute('type', 'text');
        // password.type = 'text';

        // Font awesome isn't OK 
        // eyeicon.textContent = "Close";


    }else{
        // console.log('hide password');
        eyeicon.classList.replace('fa-eye-slash','fa-eye');

        password.setAttribute('type', 'password');
        
        // Font awesome isn't OK 
        // eyeicon.textContent = "Open";

    }
});