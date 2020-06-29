{
    const reviews = [
        {
            id: 1,
            name: "Tanya Sinclair",
            job: "UX Engineer",
            img: './images/image-tanya.jpg',
            review: '“ I’ve been interested in coding for a while <br> but never taken the jump, until now. I<br> couldn’t recommend this course enough. <br> I’m now in the job of my dreams and so<br> excited about the future.”'
        },
        {
            id: 2,
            name: "John Tarkpor",
            job: "Junior Front-end Developer",
            img: './images/image-john.jpg',
            review: '“ If you want to lay the best foundation <br> possible I’d recommend taking this course. <br> The depth the instructors go into <br> is incredible.I now feel so confident about <br>starting up as a professional developer.”'
        }
    ];

    const profile = document.querySelector('.profile');
    const author = document.querySelector('.author');
    const job = document.querySelector('.job');
    const testimonials = document.querySelector('.testimonials');

    const nextBtn = document.querySelector('.next-svg');
    const prevBtn = document.querySelector('.prev-svg');

    let currentReview = 0;

    window.addEventListener('DOMContentLoaded', () => {
        changeReview(currentReview)
    });


    function changeReview(current) {
        const reviewsArr = reviews[current];
        profile.src = reviewsArr.img;
        author.textContent = reviewsArr.name;
        job.textContent = reviewsArr.job;
        testimonials.innerHTML = reviewsArr.review;
    };


    nextBtn.addEventListener('click', () => {
        currentReview++;
        if (currentReview > reviews.length - 1) {
            currentReview = 0;
        }
        changeReview(currentReview);

    });

    prevBtn.addEventListener('click', () => {
        currentReview--;
        if (currentReview < 0) {
            currentReview = reviews.length - 1;
        }
        changeReview(currentReview);

    });


}