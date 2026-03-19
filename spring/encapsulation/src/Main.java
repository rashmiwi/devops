//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Student obj = new Student();
        obj.setName("Kamal");
        obj.getName();
        System.out.println(obj.getName());
        obj.setAge(22);
        obj.getAge();
        System.out.println(obj.getAge());
    }
}