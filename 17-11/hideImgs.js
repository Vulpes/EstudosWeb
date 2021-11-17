class hideImgs{
    constructor(id){
        this.imgs = document.querySelector(`[data-imgs="${id}"]`);
        this.active = 0
        this.init();
    }

    activeImage(index){
        this.active = index;
        this.items.forEach(item => item.classList.remove('active'));
        this.items[index].classList.add('active');
        console.log(this.items[index]);

        this.thumbItems.forEach(thumb => thumb.classList.remove('active'));
        this.thumbItems[index].classList.add('active');

        this.autoSlide();
    }

    prev(){
        if(this.active > 0){
            this.activeImage(this.active - 1);
        }else{
            this.activeImage(this.items.length - 1);
        }
    }

    next() {
        if(this.active < this.items.length - 1){
            this.activeImage(this.active + 1);
        }else{
            this.activeImage(0);
        }
    }

    addNavigation() {
        const nextBtn = this.imgs.querySelector('.slide-next');
        const prevBtn = this.imgs.querySelector('.slide-prev');

        nextBtn.addEventListener('click', this.next);
        prevBtn.addEventListener('click', this.prev)
    }

    addThumbItems() {
        this.items.forEach(() => this.thumb.innerHTML += `<span></span>`);
        this.thumbItems = Array.from(this.thumb.children);
    }

    autoSlide(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.next, 5000);
    }

    init(){
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);

        this.items = this.imgs.querySelectorAll('.img-items > *');
        this.thumb = this.imgs.querySelector('.slide-thumb');
        this.addThumbItems();

        this.activeImage(0)

        this.addNavigation();
    }
}

new hideImgs('imgs');