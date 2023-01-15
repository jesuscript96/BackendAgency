'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('services', [
      {
      name: "Website design and development",
      description: "Our website design and development service specializes in creating visually stunning and highly functional websites for businesses of all sizes. With a team of experienced designers and developers, we can bring your online vision to life. From custom graphics and layout design to website coding and development, we handle every aspect of the website creation process. Our goal is to provide you with a website that not only looks great, but also effectively communicates your brand message and converts visitors into customers. Whether you need a simple brochure website or a fully-featured e-commerce platform, we have the skills and expertise to deliver the perfect solution for your business. Contact us today to discuss your project and request a quote.",
      type: "web, ux, ui",
      price: 600,
      img: "https://media.istockphoto.com/id/1201166649/es/foto/sitio-web-de-dise%C3%B1o-web-de-dispositivos-responsivos-de-oficina.jpg?s=612x612&w=0&k=20&c=A1iiADMCKkiWssf7M4lc1hy6bjITax4hjTmU4aLEGUw=",
      available: true
    },
    {
      name: "Search engine optimization (SEO)",
      description: "Search engine optimization (SEO) is a critical service that helps your website rank higher in search engine results pages (SERPs). By optimizing your website's content, structure, and code, we can improve its visibility and attract more qualified traffic to your site.     With our SEO service, we will analyze your website and identify areas for improvement. We will then implement a customized strategy to optimize your website for specific keywords and phrases, ensuring that it ranks higher in search engine results. Our team of experienced SEO professionals will track your website's progress and adjust our strategy as needed to ensure ongoing success.      Our SEO service includes Keyword research and analysis, On-page optimization, Off-page optimization, Link building, Content creation and optimization, Local SEO and Mobile optimization.By utilizing our SEO service, you can increase your website's visibility, drive qualified traffic to your site, and improve your online presence. Contact us today to learn more about how our SEO service can benefit your business.",
      type: "seo",
      price: 500,
      img: "https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340__480.jpg",
      available: true
    },
    {
      name: "Paid advertising",
      description: "Our paid advertising service is designed to help businesses increase their online visibility and reach their target audience. We use targeted ads on various platforms, including Google AdWords, Facebook, and Instagram, to ensure that your ads are being seen by the right people at the right time. Our team of experts will work with you to develop a customized advertising plan that meets your specific business goals and budget. With our paid advertising service, you can expect to see an increase in website traffic, leads, and ultimately, sales. Contact us today to learn more about how we can help your business grow through paid advertising.",
      type: "sem, paid",
      price: 700,
      img: "https://oviondwebsite.s3.amazonaws.com/online_marketing_commercial_connection_technology_140040630e.jpg",
      available: true
    },
    {
      name: "Social media marketing",
      description: "Our social media marketing service helps businesses increase their online presence and engage with their target audience through popular social media platforms such as Facebook, Instagram, and Twitter. Our team of experts will create and manage a customized social media strategy to increase brand awareness and drive traffic to your website. We will create engaging content, run targeted advertising campaigns, and interact with followers to build a strong and loyal community. With our social media marketing service, you can expect an increase in website traffic, leads, and sales.",
      type: "sem, content, social",
      price: 700,
      img: "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994__480.jpg",
      available: true
    },
    {
      name: "Email marketing",
      description: "Our email marketing service is a powerful tool to help your business reach and engage with your target audience. With our service, you can design and send professional email campaigns to your subscribers, track the results, and analyze the effectiveness of your campaigns. Our platform is easy to use and offers a range of features to help you create the perfect email marketing campaign. You can customize templates, segment your email list, and schedule your emails to be sent at the optimal time. Our team of email marketing experts is here to help you every step of the way, offering guidance and support to ensure your campaigns are successful. With our email marketing service, you can build relationships with your customers and drive conversions through targeted and personalized communication.Sign up for our email marketing service today and start growing your business!",
      type: "ux, email",
      price: 700,
      img: "https://cdn.pixabay.com/photo/2018/08/03/23/36/marketing-3582974__480.jpg",
      available: true
    },
    {
      name: "Affiliate marketing",
      description: "Affiliate marketing is a performance-based marketing strategy in which a business rewards affiliates for each customer brought to the business by the affiliate's own marketing efforts. In this model, affiliates earn a commission for referring customers to the business. The business uses a tracking link to identify when an affiliate has referred a customer, and the affiliate is then credited with the sale. Affiliate marketing is an effective way for businesses to reach new customers, and it can also be a profitable way for affiliates to earn income. If you are interested in becoming an affiliate, please contact us to learn more about our affiliate program and how you can join.",
      type: "sem, paid, influencers",
      price: 700,
      img: "https://media.istockphoto.com/id/902074388/es/foto/concepto-de-programa-en-la-pantalla-de-tablet-y-smartphone-de-afiliados.jpg?s=612x612&w=0&k=20&c=Ycw0vtv--5RoVv0AzkMK1JefHkEhsAYkfLdPV0-75-A=",
      available: true
    },
    {
      name: "Conversion rate optimization",
      description: "Our Conversion Rate Optimization (CRO) service is designed to help businesses increase the percentage of website visitors who take a desired action, such as making a purchase or filling out a form. By analyzing your website's traffic and user behavior, we can identify areas for improvement and implement strategies to increase conversions. Our team of experts will conduct A/B testing, optimize landing pages, and implement targeted messaging to help you achieve your desired results. With our CRO service, you can expect to see an increase in revenue, as well as a higher return on investment for your marketing efforts. Contact us today to learn more about how we can help you optimize your website for conversions.",
      type: "growth, conversion, sem",
      price: 700,
      img: "https://cdn.pixabay.com/photo/2019/06/25/08/17/cro-4297722__480.jpg",
      available: true
    },
    {
      name: "Customer acquisition",
      description: "Our customer acquisition service is designed to help businesses grow their customer base and increase revenue. Our team of experts will work closely with you to understand your target market and develop targeted marketing campaigns to attract new customers. We will also provide ongoing support and analysis to ensure that our efforts are effective and aligned with your business goals. With our customer acquisition service, you can focus on running your business while we take care of finding new customers for you.",
      type: "growth, conversion, sem",
      price: 700,
      img: "https://media.istockphoto.com/id/1199291210/es/foto/empresario-que-atrae-figuras-humanas-con-im%C3%A1n-de-herradura.jpg?s=612x612&w=0&k=20&c=SVsLuhhfe-Etq1_NFTQrWRb-zKUHJlwVHWld38UjDcU=",
      available: true
    },
    {
      name: "Customer retention",
      description: "At XYZ Company, we understand that keeping your customers happy is key to the success of your business. That's why we offer a comprehensive customer retention service to ensure that your customers keep coming back. Our team of experienced professionals will work with you to identify and address any potential issues or concerns your customers may have, helping to build loyalty and retention. We also offer ongoing support and communication to ensure that your customers feel valued and taken care of. By choosing our customer retention service, you can rest assured that you are doing everything in your power to keep your customers happy and coming back for more. Contact us today to learn more about how we can help your business thrive."
      ,
      type: "growth, retention",
      price: 700,
      img: "https://www.thealternativeboard.com/hubfs/Compressed-bigstock-Customer-Retention-Strategy-D-255195535.jpg",
      available: true
    }
    
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
