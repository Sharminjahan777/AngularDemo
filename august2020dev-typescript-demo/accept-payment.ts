
import{PaymentSystem} from "./payment-system";
class AcceptPayment{

  public paymentSystem: PaymentSystem;
  constructor(paymentSystem:PaymentSystem){
   this.paymentSystem = paymentSystem;
  }

  showPaymentInformation(): void{
    console.log(this.paymentSystem.getPageTitle());
  }
}

var payment = new AcceptPayment(new PaymentSystem("levelup"));
payment.showPaymentInformation();
