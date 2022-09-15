import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';

import { CCard ,CCardImage,CCol,CRow,CCardBody,CCardText,CCardTitle} from "@coreui/bootstrap-react";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Skeleton from '@mui/material/Skeleton';

 function Media(props) {
  const { loading = false } = props;

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader


        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            'Ted'
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            '5 hours ago'
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
          alt="Nicola Sturgeon on a TED talk stage"
        />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default function DishCard(props) {
  return (
    <div id={props.id}>
<CCard className="mb-3" >
  <CRow className="g-0">
    <CCol md={4}>
      <CCardImage src={props.img}/>
    </CCol>
    <CCol md={8}>
      <CCardBody>
        <CCardTitle>{props.title}</CCardTitle>
        <CCardText>{props.capt}</CCardText>
        <CCardText>
          <small className="text-medium-emphasis">{props.price}</small>
        </CCardText>
      </CCardBody>
    </CCol>
  </CRow>
</CCard>

      {/* <Media loading />
      <Media /> */}
    </div>
  );
}

