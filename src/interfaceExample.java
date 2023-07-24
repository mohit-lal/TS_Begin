// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.Scanner;

class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        Scanner input1 = new Scanner(System.in);
        System.out.println("1. House mortgage calculator\n2. Condo mortgage Calculator\n 3. Townhouse mortgage Calculator");
        String type = input1.nextLine();
        Scanner input2 = new Scanner(System.in);
        System.out.println("Enter your salary: \n");
        String salary = input2.nextLine();
        
        switch(type) {
            case "1":
                House house = new House();
        Property property1 = new Property(house, Integer.parseInt(salary));
        System.out.println("Your house mortgage is: " + property1.mortgage());
        break;
        case "2":
            Condo condo = new Condo();
        Property property2 = new Property(condo, Integer.parseInt(salary));
        System.out.println("Your condo mortgage is: " + property2.mortgage());
        break;
        }
        
        
        
    }
}

interface PropertyInterface {
    public int rooms();
    public int bath();
	
}

class House implements PropertyInterface {
    public int rooms() {
        return 5;
    }
    
    public int bath() {
        return 2;
    }
}

class Condo implements PropertyInterface {
    public int rooms() {
        return 3;
    }
    
    public int bath() {
        return 1;
    }
}

class Townhouse implements PropertyInterface {
    public int rooms() {
        return 5;
    }
    
    public int bath() {
        return 5;
    }
}

class Property {
    
    private PropertyInterface property;
    private int value;
    
    public Property(PropertyInterface property, int value) {
        this.property = property;
        this.value = value;
    }
    
    public int mortgage() {
        return this.property.rooms() + this.property.bath() + this.value;
    }
}
