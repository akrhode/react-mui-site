import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      sx={{ width: 300, height: 325, marginLeft: 1 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.pexels.com/photos/15765194/pexels-photo-15765194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Village",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/13291202/pexels-photo-13291202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Fountain",
  },
  {
    img: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Sea",
  },
  {
    img: "https://images.pexels.com/photos/5156572/pexels-photo-5156572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Lavender",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/1083895/pexels-photo-1083895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Flowers",
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Sky",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Boat",
  },
  {
    img: "https://images.pexels.com/photos/1142984/pexels-photo-1142984.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Beach",
  },
  {
    img: "https://images.pexels.com/photos/2543246/pexels-photo-2543246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Shop",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.pexels.com/photos/8350180/pexels-photo-8350180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Baguette",
  },
  {
    img: "https://images.pexels.com/photos/1317843/pexels-photo-1317843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Village",
  },
  {
    img: "https://images.pexels.com/photos/161098/menton-old-town-harbour-entrance-lighthouse-161098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Port",
    cols: 2,
  },
];
