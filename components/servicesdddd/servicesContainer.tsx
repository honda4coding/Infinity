// import { useEffect, useState } from "react";
// import ServicesPage from "../../src/app/services/page";
// import { useRouter } from "next/router";

// interface Service {
//   id: number;
//   title: string;
//   description: string;
//   images: string[];
// }

// const ServicesContainer = () => {
//   const router = useRouter();
//   const { serviceId } = router.query;
//   const [services, setServices] = useState<Service[]>([]);
//   const [selectedServiceId, setSelectedServiceId] = useState<number | null>(
//     null
//   );

//   useEffect(() => {
//     // Fetch services data from your API or any data source
//     const fetchData = async () => {
//       try {
//         // Simulating fetching services data
//         const data: Service[] = [
//           {
//             id: 1,
//             title: "Service 1",
//             description: "Description of Service 1",
//             images: [
//               "service1-img1.jpg",
//               "service1-img2.jpg",
//               "service1-img3.jpg",
//             ],
//           },
//           {
//             id: 2,
//             title: "Service 2",
//             description: "Description of Service 2",
//             images: ["service2-img1.jpg", "service2-img2.jpg"],
//           },
//           // Add more services as needed
//         ];
//         setServices(data);
//       } catch (error) {
//         console.error("Error fetching services:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (serviceId && !isNaN(parseInt(serviceId as string))) {
//       setSelectedServiceId(parseInt(serviceId as string));
//     }
//   }, [serviceId]);

//   return (
//     <ServicesPage services={services} selectedServiceId={selectedServiceId} />
//   );
// };

// export default ServicesContainer;
