function TheSong(name,genre,typeOfLovers,country,author){
    this.name = name; 
    this.gnere = genre; 
    this.typeOfLovers = typeOfLovers;
    this.country = country;
    this.author = author
}

var LaFoule = TheSong(name = "La Foule", genre = "French Music",typeOfLovers = ["French People","Old people","Language Lovers","Language Learners"] , country = "France",author = "Edith Piaf"
)


console.log(LaFoule.country)
