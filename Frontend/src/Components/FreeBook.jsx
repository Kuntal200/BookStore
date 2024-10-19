import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";
function FreeBook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3001/book");
        
        const data= res.data.filter((data) => data.category === "Free");
        console.log(data);
        setBook(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getBook();
  }, []);
  // const filterData = list.filter((data) => data.category === "Free");
  //console.log(filterData);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto ">
        <div>
          {" "}
          <h1 className=" font-semibold text-xl pb-2">Free offered Courses</h1>
          <p className="mt-5">
            Welcome to our Free Books section, where you can explore a wide
            range of captivating reads at no cost! Discover classics,
            contemporary works, and hidden gems across various genres. Whether
            you're a casual reader or a book enthusiast, there's something for
            everyone. Start your literary adventure today with our free
            collection!
          </p>
        </div>

        <div className="p-11">
          <Slider {...settings}>
            {book.map((item)=>(
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBook;
