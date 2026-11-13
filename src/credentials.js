const imageUrl = file => `/hmh-certificates/${encodeURIComponent(file)}`;
const entry = (title, category, issuer, date, file, thumbnail) => ({ title, category, issuer, date, image: imageUrl(file), thumbnail: `/images/certificates/certificate-${thumbnail}.jpg` });

export const certificates = [
  entry('Applied Program Management', 'Management', 'CSO Academy', '12 Nov 2025', 'Applied Program Management.jpg', 1),
  entry('AI for Project Management — I', 'Technology', 'CSO Academy', '9 Aug 2025', 'Certificate_Artificial_Intelligence_AI_for_Project_Management_I.jpg', 2),
  entry('AI for Project Management — II', 'Technology', 'CSO Academy', '15 Aug 2025', 'Certificate_Artificial_Intelligence_AI_for_Project_Management_II.jpg', 3),
  entry('AI for Project Management — III', 'Technology', 'CSO Academy', '22 Aug 2025', 'Certificate_Artificial_Intelligence_AI_for_Project_Management_III.jpg', 4),
  entry('Organizational Leadership & Management — I', 'Leadership', 'CSO Academy', '7 Aug 2025', 'Certificate_Organizational Leadership and Management Part I.jpg', 5),
  entry('Organizational Leadership & Management — II', 'Leadership', 'CSO Academy', '15 Aug 2025', 'Certificate_Organizational Leadership and Management Part II.jpg', 6),
  entry('Organizational Leadership & Management — III', 'Leadership', 'CSO Academy', '23 Sep 2025', 'Certificate_Organizational Leadership and Management Part III_page-0001.jpg', 7),
  entry('Program Management (Basic)', 'Management', 'CSO Academy', '15 Aug 2025', 'Certificate_Program Management (Basic).jpg', 8),
  entry('Community Service Appreciation', 'Community', 'Develop Up Youth Community', '22 Oct 2025', 'Mr. Hlaing Min Htun - DUYC Gratitude Certificate.png', 9),
  entry('English Speaking Club Facilitator', 'Community', 'Dagon University English Students’ Service-Learning Association', 'Feb – Jul 2024', 'Volunteer Certificate Of Appreciation (English Speaking Club Facilitator).jpg', 10),
  entry('Web Development with PHP (OJT)', 'Technology', 'Host Myanmar (Mandalay) Tech Space', 'May – Aug 2023', 'Web_Development_With_PHP_(OJT)_Program.jpg', 11),
];
