import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// contact structure
interface Contact {
  Img: string;
  Contact: string;
}
interface link {
  link: string;
}
// tech 
interface tech {
  first: string;
  second: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // contact array 
  contacts: Contact[] = [
    {
      Img: "https://imgur.com/Irg3Xq5.png",
      Contact: '+1 (289) 804-0086'
    },
    {
      Img: "https://imgur.com/4WXPPh4.png",
      Contact: '+919748743357'
    },
    {
      Img: "https://imgur.com/u1Q9h5j.png",
      Contact: 'sales@sentientgeeks.com'
    },
    {
      Img: "https://imgur.com/xADzJ1o.png",
      Contact: 'Call on Skype'
    },


  ]
  // link array 
  links: link[] = [
    { link: 'About Us' },
    { link: 'Core Values ' },
    { link: 'Careers' },
    { link: 'Contact Us' },
    { link: 'Blog' },
    { link: 'Privacy Policy' },
    { link: 'Refund Policy' },
    { link: 'Delivery & Shipping ' },
    { link: 'Policy' },
  ]
  // tech details array
  tech: tech[] = [
    {
      first: 'Web Developer',
      second: 'Full Stack Developer'

    },
    {
      first: 'Wordpress | Joomla',
      second: 'MEAN | MERN | .NET Core'

    },
    {
      first: 'E-commerce Developer',
      second: 'Front End Developer'

    },
    {
      first: 'Magento | WooCommerce | Shopify',
      second: 'UI/UX | Angular | Vue Js'

    },
    {
      first: 'Mobile App Developer',
      second: 'Backend Developer'

    },
    {
      first: 'Android | IOS | Xamarin',
      second: 'PHP | Node JS | Laravel'

    }
  ]


}
