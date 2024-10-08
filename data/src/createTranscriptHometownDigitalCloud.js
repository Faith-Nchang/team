import React, { useState, useEffect } from 'react';

function App() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedTranscript, setSelectedTranscript] = useState('realEstate');

  const transcripts = {
    realEstate: `Salesperson: Hello, Mrs. Johnson. My name is Sarah from Hometown Realty. I saw that you were interested in selling your home and would like to learn more about you and how we can work together. Do you have a few minutes to discuss selling your home?

Mrs. Johnson: Oh, hello Sarah. Yes, I've been thinking about selling. I suppose I have a few minutes.

Salesperson: Wonderful, thank you for your time. May I ask what's prompting you to consider selling at this time?

Mrs. Johnson: Well, we're empty nesters now, and this house feels too big for just the two of us.

Salesperson: I completely understand. Many of our clients find themselves in similar situations. Have you given any thought to what kind of home you'd like to move into?

Mrs. Johnson: We're thinking maybe a condo or a smaller house, something with less maintenance.

Salesperson: That's a great idea. Hometown Realty has a wide range of properties that might suit your needs. Before we dive into that, though, I'd love to learn more about your current home. How long have you lived there?

Mrs. Johnson: It's been about 25 years now.

Salesperson: Wonderful, so you've really made it a home. In your time there, have you made any major renovations or upgrades?

Mrs. Johnson: Yes, we remodeled the kitchen about 5 years ago and put in new windows last year.

Salesperson: Those are excellent selling points. Buyers love updated kitchens and energy-efficient windows. Mrs. Johnson, based on what you've told me, I believe we could put together a very attractive listing for your home. Would you be interested in having me come by for a free, no-obligation home valuation? I could give you a better idea of what your home might sell for in the current market.

Mrs. Johnson: That sounds helpful. When could you do that?

Salesperson: I have some availability this week. How does Thursday afternoon around 2 PM work for you?

Mrs. Johnson: Thursday at 2 would be fine.

Salesperson: Excellent, I'll put that in my calendar. Thank you so much for your time today, Mrs. Johnson. I'm looking forward to meeting you in person and helping you transition to the next chapter of your life. Is there anything else you'd like to know before we wrap up?

Mrs. Johnson: No, I think that covers it for now. Thank you, Sarah.

Salesperson: You're very welcome. Have a great day, and I'll see you on Thursday!`,

    marketing: `Salesperson: Hi, Mr. Thompson. My name is Alex from Digital Boost Marketing. I noticed you weren't investing in social media marketing and wanted to ask you a few questions about why you've decided to stray away from this type of marketing and learn more about what you do and your challenges in reaching customers. Is now a good time to talk?

Mr. Thompson: Hi Alex. I have a few minutes now, I suppose.

Salesperson: Great, thank you. First, could you tell me a bit about your business? What products or services do you offer?

Mr. Thompson: We're a local bakery specializing in artisanal breads and pastries.

Salesperson: That sounds delicious! How long have you been in business?

Mr. Thompson: We've been around for about 10 years now.

Salesperson: Congratulations on a decade of success! That's quite an achievement. Can you tell me about your current marketing efforts? How are you typically reaching your customers?

Mr. Thompson: Well, we mostly rely on word of mouth and some local print ads. We have a website, but it's pretty basic.

Salesperson: I see. And how has that been working for you? Are you seeing the growth you'd like?

Mr. Thompson: It's been okay, but we've plateaued a bit lately. We'd like to attract more younger customers.

Salesperson: That's exactly where social media marketing could help. Platforms like Instagram and Facebook are perfect for showcasing beautiful photos of your baked goods and connecting with younger demographics. May I ask why you haven't explored social media marketing yet?

Mr. Thompson: Honestly, it just seems overwhelming. We're not very tech-savvy here, and we're always so busy with the day-to-day operations.

Salesperson: I completely understand. Many of our clients felt the same way before working with us. That's where we come in - we can handle all aspects of your social media presence, from setting up accounts to creating content and engaging with your audience. Would you be interested in hearing about how we've helped other local businesses like yours increase their customer base through social media?

Mr. Thompson: Well, I suppose it couldn't hurt to learn more.

Salesperson: Great! Let me give you a quick example. We worked with a local coffee shop last year, and within six months of implementing a social media strategy, they saw a 30% increase in foot traffic, primarily from the under-35 demographic. We could potentially achieve similar results for your bakery. Would you like to schedule a free consultation where we can do a deep dive into your business goals and how we might be able to help you achieve them?

Mr. Thompson: That does sound interesting. When could we do that?

Salesperson: I have some availability next week. How does Tuesday at 10 AM sound? We could do it via video call or in person at your bakery, whichever you prefer.

Mr. Thompson: Tuesday at 10 works. Let's do it at the bakery.

Salesperson: Perfect! I'm looking forward to meeting you and seeing your bakery. Before we wrap up, do you have any questions for me?

Mr. Thompson: Not right now, thanks.

Salesperson: Alright, thank you for your time today, Mr. Thompson. I'll send you a calendar invite for Tuesday at 10 AM. Have a great day, and I'm excited to help your bakery reach new customers!`,

    software: `Salesperson: Good afternoon, this is Emily from CloudTech Solutions. Am I speaking with Ms. Davis?

Ms. Davis: Yes, this is Sarah Davis.

Salesperson: Hi Ms. Davis, I hope I'm not catching you at a bad time. I'm reaching out because I noticed your company recently expanded its operations, and I wanted to discuss how our cloud-based project management software could help streamline your processes. Do you have a few minutes to chat?

Ms. Davis: I suppose I can spare a few minutes. What exactly does your software do?

Salesperson: Thank you for your time, Ms. Davis. Our software, CloudProject, is designed to help businesses like yours manage complex projects more efficiently. It offers real-time collaboration, resource allocation, and progress tracking all in one platform. Can you tell me a bit about how your team currently manages projects?

Ms. Davis: We're using a combination of spreadsheets and email right now. It works, but it's not ideal, especially with our recent growth.

Salesperson: I see. Many of our clients were in a similar position before switching to CloudProject. What would you say are the biggest challenges you're facing with your current system?

Ms. Davis: Well, it's becoming increasingly difficult to keep everyone on the same page. We're wasting time in meetings just trying to figure out who's doing what and what's been completed.

Salesperson: That's a common issue, and it's exactly the kind of problem CloudProject is designed to solve. Our platform provides a central hub where all team members can see task assignments, deadlines, and progress in real-time. How do you think that kind of visibility would impact your team's productivity?

Ms. Davis: It could certainly help reduce some of the confusion we're experiencing. How difficult is it to implement and train staff on using it?

Salesperson: Great question. We pride ourselves on making the transition as smooth as possible. We offer a comprehensive onboarding process, including personalized training sessions for your team. Most of our clients find that their teams are up and running comfortably within a week. Would you be interested in seeing a demo of how CloudProject works?

Ms. Davis: A demo could be helpful. When could we do that?

Salesperson: I'd be happy to set that up for you. I have some availability tomorrow afternoon or Friday morning. Which would work better for you?

Ms. Davis: Friday morning would be preferable.

Salesperson: Excellent. How does 10 AM on Friday sound? I can send you a calendar invite with a link to our video conference platform.

Ms. Davis: 10 AM Friday works for me.

Salesperson: Perfect, I'll send that invite right over. Before we wrap up, do you have any other questions about CloudProject or our company?

Ms. Davis: Not at the moment, but I'm sure I'll have some during the demo.

Salesperson: Of course. I'll make sure to leave plenty of time for questions during our session. Thank you so much for your time today, Ms. Davis. I'm looking forward to showing you how CloudProject can help streamline your operations on Friday.

Ms. Davis: Thank you, Emily. I'll see you then.

Salesperson: Great, have a wonderful rest of your day!`
  };

  const postTranscript = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jo589y2zh7.execute-api.us-east-1.amazonaws.com/test/transcriptions/transcript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transcriptText: transcripts[selectedTranscript] }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      console.error('Error posting data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    postTranscript();
  }, [selectedTranscript]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Rilla Voice: Speech Analytics for Outside Sales</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="transcript-select" style={{ marginRight: '10px' }}>Select a transcript:</label>
        <select
          id="transcript-select"
          value={selectedTranscript}
          onChange={(e) => setSelectedTranscript(e.target.value)}
          style={{ padding: '5px' }}
        >
          <option value="realEstate">Real Estate</option>
          <option value="marketing">Marketing</option>
          <option value="software">Software</option>
        </select>
      </div>

      <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Transcript</h2>
        {transcripts[selectedTranscript].split('\n\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '10px' }}>{paragraph.trim()}</p>
        ))}
      </div>

      <button 
        onClick={postTranscript} 
        disabled={loading}
        style={{
          backgroundColor: loading ? '#ccc' : '#007bff',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '20px'
        }}
      >
        {loading ? 'Posting...' : 'Posting Transcript'}
      </button>

      {loading && <p>Posting transcript...</p>}

      {error && (
        <div style={{ backgroundColor: '#ffeeee', border: '1px solid #ff0000', borderRadius: '4px', padding: '20px', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '10px', color: '#ff0000' }}>Error</h2>
          <p style={{ color: '#ff0000' }}>{error}</p>
        </div>
      )}

      {response && (
        <div style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '20px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>API Response</h2>
          <pre style={{ whiteSpace: 'pre-wrap', overflowX: 'auto' }}>
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;