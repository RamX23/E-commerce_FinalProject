import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  const isSecure = process.env.NODE_ENV === 'production';
  
  // Generate JWT token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token expiration in 30 days
  });

  // Set the token in a secure, httpOnly cookie
  res.cookie('jwt', token, {
    httpOnly: true, 
    secure: isSecure, // Only true if in production, which requires HTTPS
    sameSite: isSecure ? 'None' : 'Lax', // 'None' for cross-site requests (production)
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  });

  // Optional: Only log the token in development mode
  if (process.env.NODE_ENV === 'development') {
    console.log(token);
  }

  return token;
};

export default generateToken;
