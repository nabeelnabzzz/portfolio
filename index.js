

function sendMail(){
  let name = document.getElementById("from_name").value;
  let mail = document.getElementById("from_email").value;
  let subject =  document.getElementById("subject").value;
  let message = document.getElementById("message").value
  if(name != null && mail != null && subject != null && message != null){
    var params = {
      from_name : name,
      from_email : mail,
      subject : subject,
      message : message
    }
      
    emailjs.send("service_9tvua0o","template_4ivojc5",params).then (function (res){
      alert("success"+ res.status);
      document.contact-form.reset();
    });
  }
  
}



document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-animate');
      } else {
        entry.target.classList.remove('show-animate');
      }
    });
  });

  const squares = document.querySelectorAll('.headings');
  squares.forEach((element) => observer.observe(element));
});

