




/*turn page when click next or prev*/
const pageTurnBtn= document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el,  index) =>{
    el.onclick= () =>{
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(()=> {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(()=> {
                pageTurn.style.zIndex = 20 + index;
            }, 500)

        }

    }
})

//contact me button with click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');


ontactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout (() => {
            page.classList.add('trun');


            setTimeout(() => {
                page.style.zIndex = 10 + index;

            }, 500)
        }, (index + 1) * 200 + 100)
    }) 

}







// for emailing 
/* document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Replace these with your own email details
    var emailTo = 'natanasnu19@gmail.com';
    var subject = 'New Message from Your Portfolio';
    var body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  
    // Create an email link with the form data
    var mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
    // Open the email client with the pre-filled form data
    window.location.href = mailtoLink;
  
    // Display a success message
    document.getElementById('response-message').textContent = 'Your message has been sent!';
    document.getElementById('response-message').classList.remove('hidden');
  
    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  });
 */







  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var formData = new FormData(this);

    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        return response.text();
    })
    .then(function(message) {
        alert(message); // Display the server's response
        // Reset the form fields
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    })
    .catch(function(error) {
        alert('Error sending message: ' + error);
    });
});