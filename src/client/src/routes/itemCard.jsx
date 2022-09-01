// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// // function ItemCard() {
// //   return (
// //     <Card style={{ width: "18rem" }}>
// //       <Card.Img
// //         variant="top"
// //         src="https://imageproxy.wolt.com/venue/617a77c400cdc38e4949961d/139e4d1c-37d8-11ec-abad-ea41cff6cda7_54c80656_8ec0_11ea_a95a_0a58646e610f_yaelitz_2.avif?w=960"
// //       />
// //       <Card.Body>
// //         <Card.Title>Burger King</Card.Title>
// //         <Card.Text className="tags">burgers,meat</Card.Text>
// //         <Button variant="solid" disabled>
// //           20-30 min
// //         </Button>{" "}
// //         <div className="cardFooter">4$-5$</div>
// //       </Card.Body>
// //     </Card>
// //   );
// // }

// import { Cards } from 'react-responsive-cards'
 
// const ItemCard = () => {
//   const details = [
//     {
//       title: 'The Card Title',
//       description: 'This is a short description',
//       image: 'https://<image_here>.jpg',
//       renderFooter: <div>{'Custom JSX'}</div>,
//       handleOnClick: () => alert('Custom Event')
//     }
//   ]
 
//   return <Cards details={details} />
// }
 
// export default ItemCard;

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function ItemCard() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?crop=entropy&auto=format&fit=crop&w=3270"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
        Yosemite National Park
      </Typography>
      <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
        California
      </Typography>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          gap: 1.5,
          py: 1.5,
          px: 'var(--Card-padding)',
          borderTop: '1px solid',
          borderColor: 'neutral.outlinedBorder',
          bgcolor: 'background.level1',
        }}
      >
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          6.3k views
        </Typography>
        <Box sx={{ width: 2, bgcolor: 'divider' }} />
        <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
          1 hour ago
        </Typography>
      </CardOverflow>
    </Card>
  );
}
