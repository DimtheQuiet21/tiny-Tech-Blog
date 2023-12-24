const getPast = (req,res,next) => {
    const today = dayjs();
    const days_ago = today.subtract(1, 'week')
    next (days_ago);
};

module.exports = getPast;