class Student{
    setValues(id,name,marks){
        this.id=id;
        this.name=name;
        this.marks=marks;
    }

    getValues(){
        console.log("ID = "+this.id);
        console.log("Name = "+this.name);
        console.log("Marks = "+this.marks)
    }
    study(){
        console.log("Student is studing !");
    }
}

let Student1=new Student();
Student1.setValues(101,'ram',86);
Student1.setValues(102,'Shyam',96);
Student1.getValues();
Student1.study();



