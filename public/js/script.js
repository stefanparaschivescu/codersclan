var mq = window.matchMedia( "(max-width: 767px)" );
if (mq.matches) {
    window.addEventListener('load', function() {
        if (mq.matches) {
            document.getElementById('special-section').innerHTML = 
            `
            <div class="col-12 col-md-6 ">
                <div class="insideParagraph">
                    <h1>We Have Content About Our Toppings</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Nec ullamcorper sit amet risus nullam eget felis. 
                        Leo duis ut diam quam nulla porttitor. 
                        Fringilla phasellus faucibus scelerisque eleifend.</p>
                    <div class="contact">
                        <a>READ MORE</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <img class="responsive" src="./public/assets/PNG/Rectangle 2@2x.png"/>
            </div>
            `;
        }
        else {
            document.getElementById('special-section').innerHTML = 
            `
            <div class="col-12 col-md-6">
                <img class="responsive" src="./public/assets/PNG/Rectangle 2@2x.png"/>
            </div>
            <div class="col-12 col-md-6 ">
                <div class="insideParagraph">
                    <h1>We Have Content About Our Toppings</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Nec ullamcorper sit amet risus nullam eget felis. 
                        Leo duis ut diam quam nulla porttitor. 
                        Fringilla phasellus faucibus scelerisque eleifend.</p>
                    <div class="contact">
                        <a>READ MORE</a>
                    </div>
                </div>
            </div>
            `;
        }
    });
}

