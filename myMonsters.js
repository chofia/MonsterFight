//-----------------------Parent class--------
//It's conventional to start objects with a capital letter
class LivingThing { 
    //class objects always need a constructor. runs once when creating
    // living think with the new keyword
    constructor(name, health){
        this.name = name;
        this.health = health;
    }//end Constructor

    //adding methods // getter for health properties
    getName(){
        return this.name;
    }
    //getter for name properties
    getHealth(){
        return this.health;
    }

    setName(name){
        this.name = name;
    }
    
    setHealth(health){
        this.health = health;
    }
}//end LivingThing object

//-----------------------Hero(child class)--------
//new class here that extends LivingThing which means all the -
// functionality the LivingThing has and so does the Hero
class Hero extends LivingThing{
    //normally I wouldn't need another constructor but because I
     // added an extra property then i will have to do the following
    //calls the parent constructor to do the stuff with name and health since it
     // already knows what to do with it
    constructor(name, health, superHeroIdentity){
        //super refers to the parent method and calls these constructor
        super(name, health);   

        //new property just for the hero
        this.superHeroIdentity = superHeroIdentity;
    }//constructor ends

    //-----------------------Action(boss fight)--------

    attack(monster){
        //generate random numbers between 1 and 100 for damage for hero/monster
        let monsterDamage = Math.floor(Math.random() * 101);
        let heroDamage = Math.floor(Math.random() * 101);

        //update the health on the respective objects
        monster.setHealth(monster.getHealth() - monsterDamage);
        this.setHealth(this.getHealth() - heroDamage);
    }//attack(monster)ends

    fight(listOfMonsters){
        //monsters should attack the hero until either the hero is dead or all monsters are dead
        for(let monster of listOfMonsters){
            //make the monster attack the hero until one dies
            while(this.getHealth() > 0 && monster.getHealth() >0){
                this.attack(monster);
                console.log(myHero, monsters);
            }
        }
    }

}//child class ends


//-----------------------Monster(Parent class)--------
//declare the monsters name and health
let ogre = new LivingThing("ogre", 80)
let troll = new LivingThing("troll", 100)
let vampire = new LivingThing("vampy", 75)

//Monsters array
let monsters = [ogre, troll, vampire]; 

//create a hero from the Hero class
let myHero = new Hero("Clark", 200, "Superman")

myHero.fight(monsters);

if(myHero.getHealth() > 0){
    console.log("hero won");
}
else{
    console.log("hero loss")
}



// //for loop to spit out names and health of monsters
// for (let i = 0; i < monsters.length; i++ ){
//     console.log(monsters[i].getName() + " health is at " 
//     + monsters[i].getHealth());
// }
