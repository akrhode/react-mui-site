import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import QuiltedImageList from "../components/ImageLists";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Enjoy the Scents of the Provence
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://images.pexels.com/photos/11267022/pexels-photo-11267022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        height={325}
      />
      <QuiltedImageList />
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this Tour
      </Typography>
      <Typography variant="paragraph" component="p4" marginTop={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus
        nibh, euismod vitae velit quis, condimentum porttitor sem. Morbi egestas
        justo at vulputate consequat. Praesent vel finibus nibh. Fusce elementum
        erat hendrerit turpis sagittis, feugiat placerat orci lacinia. Duis in
        condimentum nisl. Phasellus bibendum orci at semper efficitur. Aliquam
        porttitor ut dolor posuere consectetur. Phasellus vehicula, odio id
        iaculis molestie, justo mauris consequat orci, a accumsan leo leo eu
        velit. Vestibulum nec lectus ut turpis tempor varius. In tempus magna
        nec diam luctus posuere. Donec at nisi bibendum, semper urna quis,
        tincidunt lectus. Donec et est massa. Curabitur dignissim venenatis
        justo nec rutrum.
      </Typography>
    </Box>
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        Frequently Asked Questions
      </Typography>
    </Box>
  </Container>
);

export default Tour;
