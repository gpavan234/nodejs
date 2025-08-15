export default function authorize(roles = []) {
  const required = Array.isArray(roles) ? roles : [roles];
  return (req, res, next) => {
    if (!req.user?.role || !required.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    next();
  };
}
