"use client"
import { Box, Container, Typography, Card, CardContent, Avatar, Grid } from "@mui/material"
import { PlayArrow } from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import { useState } from "react"
// import FirstVideo from '../../../assets/videos/first-video.mp4'
const CommunityContainer = styled(Box)({
  backgroundColor: "#f8fafc",
  padding: "80px 0",
  position: "relative",
  overflow: "hidden",
})

const SectionHeader = styled(Box)({
  textAlign: "center",
  marginBottom: "60px",
  position: "relative",
})

const HeaderIcon = styled(Box)({
  width: "48px",
  height: "48px",
  backgroundColor: "#e0e7ff",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 16px auto",
})

const HeaderText = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  flexWrap: "wrap",
})

const HeaderTitle = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: 600,
  color: "#1e293b",
})

const HeaderSubtitle = styled(Typography)({
  fontSize: "1.5rem",
  color: "#6366f1",
  fontWeight: 600,
})

const ProfilesContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "16px",
  marginBottom: "60px",
  flexWrap: "wrap",
})

const ProfileCard = styled(Box)({
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  width: "240px",
  height: "300px",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
  },
})

const ProfileVideo = styled("video")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
})

const ProfileImage = styled(Box)({
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
})

const ProfileOverlay = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
  padding: "20px 16px 16px 16px",
  color: "white",
})

const PlayButton = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60px",
  height: "60px",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "white",
    transform: "translate(-50%, -50%) scale(1.1)",
  },
})

const ProfileName = styled(Typography)({
  fontSize: "1rem",
  fontWeight: 600,
  marginBottom: "4px",
})

const ProfileRole = styled(Typography)({
  fontSize: "0.875rem",
  opacity: 0.9,
  lineHeight: 1.3,
})

const TestimonialsGrid = styled(Grid)({
  position: "relative",
})

const TestimonialCard = styled(Card)({
  padding: "24px",
  borderRadius: "16px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  height: "100%",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
})

const TestimonialHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "16px",
})

const TestimonialBadge = styled(Box)(({ color }) => ({
  backgroundColor: color || "#6366f1",
  color: "white",
  padding: "4px 12px",
  borderRadius: "20px",
  fontSize: "0.75rem",
  fontWeight: 600,
}))

const TestimonialText = styled(Typography)({
  fontSize: "0.875rem",
  lineHeight: 1.6,
  color: "#374151",
  marginBottom: "16px",
})

const TestimonialFooter = styled(Typography)({
  fontSize: "0.75rem",
  color: "#6b7280",
  fontWeight: 500,
})

const CommunitySection = () => {
  const [playingVideo, setPlayingVideo] = useState(null)

  const profiles = [
    {
      id: 1,
      name: "Abhishek Madhavan",
      role: "Offered Architect role at DAP, Pune",
      image: "/placeholder.svg?height=300&width=240",
      video: "/placeholder-video.mp4", // You'll replace this with actual video
    },
    {
      id: 2,
      name: "Ashish Kumar",
      role: "Offered Sr. BIM Architect role at Techture, Indore",
      image: "/placeholder.svg?height=300&width=240",
      video: "/placeholder-video.mp4",
    },
    {
      id: 3,
      name: "Dhanya Gupta",
      role: "Offered BIM Architect role at The BIM Engineers",
      image: "/placeholder.svg?height=300&width=240",
      video: "/placeholder-video.mp4",
    },
    {
      id: 4,
      name: "Harmeet Singh",
      role: "Offered Architect role at FMD, Gurgaon",
      image: "/placeholder.svg?height=300&width=240",
      video: "/placeholder-video.mp4",
    },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Aditya Gupta",
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "BIM Specialist",
      badgeColor: "#8b5cf6",
      text: "This course has been an eye opener in terms of how the AEC industry has changed and how we can leverage technology to stay relevant. The Dynamo lessons in particular have been a game changer for me. Students in remembering.",
      footer: "Review of BIM Professional Course by Dynamo, (New Student)",
    },
    {
      id: 2,
      name: "Aditi Shukla",
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "Architect",
      badgeColor: "#10b981",
      text: "The capstone project was my favourite part. It was a glimpse of how projects are handled in the real world. The mentors were very supportive and the program made it even more interesting.",
      footer: "Review of BIM Professional Course by Dynamo, (New Student)",
    },
    {
      id: 3,
      name: "Ankita Maurya",
      avatar: "/placeholder.svg?height=40&width=40",
      badge: "BIM Engineer",
      badgeColor: "#6366f1",
      text: "BIM course truly designed as per the need of AEC industry. The whole team of Dynamo supported me throughout the course. I would definitely recommend this course for professionals to upskill.",
      footer: "Review of BIM Professional Course by Dynamo, (New Student)",
    },
  ]

  const handleVideoClick = (profileId) => {
    if (playingVideo === profileId) {
      setPlayingVideo(null)
    } else {
      setPlayingVideo(profileId)
    }
  }

  return (
    <CommunityContainer>
      <Container maxWidth="lg">
        {/* Header Section */}
       
  <div className="flex items-start mb-12">
              <div className="w-1 h-32 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full mr-8 flex-shrink-0"></div>
              <div>
                <p className="text-gray-600 mb-4 text-lg">Alumni Voices____________</p>
                <div className="flex items-start mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600 mr-4 mt-1 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                  </svg>
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                     Hear our community <span className="text-purple-600">talk about their</span>
                    </h2>
                    <p className="text-gray-600 text-2xl text-primary leading-relaxed max-w-2xl">
                      upskilling journeys
                    </p>
                    
                  </div>
                  
                </div>
              </div>
            </div>
        {/* Profile Images Section */}
        <ProfilesContainer>
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} onClick={() => handleVideoClick(profile.id)}>
              {playingVideo === profile.id ? (
                <ProfileVideo autoPlay controls>
                  <source src={profile.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </ProfileVideo>
              ) : (
                <ProfileImage
                  sx={{
                    backgroundImage: `url(${profile.image})`,
                  }}
                >
                  <PlayButton>
                    <PlayArrow sx={{ fontSize: "24px", color: "#6366f1" }} />
                  </PlayButton>
                </ProfileImage>
              )}

              <ProfileOverlay>
                <ProfileName>{profile.name}</ProfileName>
                <ProfileRole>{profile.role}</ProfileRole>
              </ProfileOverlay>
            </ProfileCard>
          ))}
        </ProfilesContainer>

        {/* Testimonials Section */}
        <TestimonialsGrid container spacing={3}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <TestimonialCard>
                <CardContent sx={{ p: 0 }}>
                  <TestimonialHeader>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 40, height: 40 }} />
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {testimonial.name}
                      </Typography>
                      <TestimonialBadge color={testimonial.badgeColor}>{testimonial.badge}</TestimonialBadge>
                    </Box>
                  </TestimonialHeader>

                  <TestimonialText>{testimonial.text}</TestimonialText>

                  <TestimonialFooter>{testimonial.footer}</TestimonialFooter>
                </CardContent>
              </TestimonialCard>
            </Grid>
          ))}
        </TestimonialsGrid>
      </Container>
    </CommunityContainer>
  )
}

export default CommunitySection
