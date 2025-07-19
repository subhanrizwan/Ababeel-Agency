"use client"
import { Card, CardContent, CardMedia, Typography, Button, Container, Grid, Box } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import FirstImg from '../../../assets/images/featurestats/first-card.webp'
import SecondImg from '../../../assets/images/featurestats/second-card.webp'
import ThirdImg from '../../../assets/images/featurestats/third-card.webp'
const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  border: "1px solid #e0e0e0",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
  },
}))

const StyledCardMedia = styled(CardMedia)({
  height: 200,
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
})

const LearnMoreButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
  borderRadius: "12px",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  width: "100%",
  "&:hover": {
    background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(139, 92, 246, 0.3)",
  },
}))

const SectionTitle = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: 700,
  color: "rgb(83, 56, 158)",
  textAlign: "center",
  marginBottom: "16px",
  "@media (max-width: 768px)": {
    fontSize: "2rem",
  },
})

const SectionDescription = styled(Typography)({
  fontSize: "1.125rem",
  color: "#64748b",
  textAlign: "center",
  maxWidth: "600px",
  margin: "0 auto 60px auto",
  lineHeight: 1.6,
  "@media (max-width: 768px)": {
    fontSize: "1rem",
    marginBottom: "40px",
  },
})

const CourseTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#6366f1",
  marginBottom: "24px",
  lineHeight: 1.3,
  "@media (max-width: 768px)": {
    fontSize: "1.25rem",
  },
})

const DetailLabel = styled(Typography)({
  fontSize: "0.875rem",
  color: "#6366f1",
  fontWeight: 500,
  marginBottom: "4px",
})

const DetailValue = styled(Typography)({
  fontSize: "1rem",
  color: "#1e293b",
  fontWeight: 600,
  marginBottom: "16px",
})

const CourseSection = () => {
  const courses = [
    {
      id: 1,
      title: "BIM Professional Course for Architects",
      image:FirstImg,
      duration: "7 months - Online",
      nextCohort: "26th July, 2025",
    },
    {
      id: 2,
      title: "Master Computational Design Course",
      image: SecondImg,
      duration: "6 months",
      nextCohort: "26th July, 2025",
    },
    {
      id: 3,
      title: "BIM Professional Course for Civil Engineers",
            image:ThirdImg,

      duration: "7 months",
      nextCohort: "17th August, 2025",
    },
    {
      id: 4,
      title: "BIM Professional Course for Civil Engineers",
            image:FirstImg,

      duration: "7 months",
      nextCohort: "17th August, 2025",
    },
   
  ]

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <SectionTitle variant="h2">Your Future Starts Here</SectionTitle>

        <SectionDescription variant="body1">
          Get closer to your professional goal with online certification courses in architecture, engineering, and
          design.
        </SectionDescription>

        <Grid container spacing={4} justifyContent="center">
          {courses.map((course) => (
            <Grid item xs={12} md={4} key={course.id}>
              <StyledCard>
                <StyledCardMedia image={course.image} title={course.title} />
                <CardContent sx={{ p: 4 }}>
                  <CourseTitle variant="h5">{course.title}</CourseTitle>

                  <Box sx={{ mb: 4 }}>
                    <DetailLabel variant="body2">Program Duration</DetailLabel>
                    <DetailValue variant="body1">{course.duration}</DetailValue>

                    <DetailLabel variant="body2">Next Cohort</DetailLabel>
                    <DetailValue variant="body1">{course.nextCohort}</DetailValue>
                  </Box>

                  <LearnMoreButton
                    variant="contained"
                    endIcon={<ArrowForward />}
                    onClick={() => console.log(`Learn more about ${course.title}`)}
                  >
                    Learn More
                  </LearnMoreButton>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default CourseSection
