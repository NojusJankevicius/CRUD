class FurnitureGridComponent {
    constructor() {
        this.state = {
            furniture: [],
            loading: false,
        };
        this.initialize();
    }

    fetchFurniture = () => {
        this.state.loading = true;
        API.getFurniture(
            (furniture) => {
                this.state.furniture = furniture;
                this.state.loading = false;
                this.render();
            },
            (err) => console.error(err)
        );
    };

    formatCardData = () =>
        this.state.furniture.map(
            ({ id, title, type, price, location, owner }) => ({
                id,
                cardData: `
        <div class="">
        <h3> ${title} </h3>
        <p> ${type} </p>
        <p> ${location.country}, ${location.city}, ${location.street}</p>
        <span> ${price} eur</span>
        </div>
        <div class=" text-end">
        <h4>${owner.fullname}</h4>
        <p>${owner.mobile}</p>
        <p>${owner.address}</p>
        <p>${owner.email}</p>
        </div>

        `,
            })
        );

    initializeCard = () => {
        this.card = new FurnitureCardComponent({
            data: this.formatCardData(),
            onDelete: this.deleteCard,
        });

        this.cardContainer = document.createElement('div')
        this.htmlElement.append(this.cardContainer);
    };

    initialize = () => {
        this.fetchFurniture();

        this.initializeCard();
        this.render();
    };

    render = () => {
        const { loading } = this.state;
        if (loading) {
            this.cardContainer.innerHTML =
                '<div class="text-center"><img src="assets/loading.gif"></div>';
        } else {
            this.cardContainer.innerHTML = "";
        }
    };
}
