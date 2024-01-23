public class Check{
    static void check(int n){
        int count =0;
        for(int i=2;i<n;i++){
            if(n%i==0){
                count++;
            }
        }
        if(count>0){
            System.out.println("Not prime");
        }else{
            System.out.println("no is prime");
        }
    }
    public static void main(String[] args) {
        check(12);

    }
}