import React from "react";
import { Sparkles, Gift, Heart, Star, Snowflake } from "lucide-react";

const FestiveMessage: React.FC = () => {
  return (
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
        <Star className="w-12 h-12 text-yellow-300 animate-spin-slow" />
      </div>

      <div className="text-center space-y-8 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-2xl max-w-3xl mx-auto border border-white/10">
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-twinkle" />
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Happy New Year
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-300 animate-twinkle" />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-yellow-200">
            & Merry Christmas!
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
          ขอให้ปีหน้ามีความสุขกับการใช้ชีวิตเเละการทำงาน ร่ำรวยเงินทอง <br />
          สุขภาพเเข็งเเรง พบเจอเเต่สิ่งดีๆ
          อะไรที่ไม่ดีในปีนี้ปีก็ขอให้ทิ้งไว้ในปีนี้ ปีหน้าว่ากันใหม่ โชคดีมีชัย
          โชคชัยมีรถครับ
        </p>

        <div className="flex flex-wrap justify-center gap-8 pt-4">
          <IconCard icon={Gift} text="Joy" />
          <IconCard icon={Heart} text="Love" />
          <IconCard icon={Snowflake} text="Peace" />
        </div>
      </div>
    </div>
  );
};

const IconCard: React.FC<{ icon: React.ElementType; text: string }> = ({
  icon: Icon,
  text,
}) => (
  <div className="flex flex-col items-center space-y-2 group">
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
      <Icon className="w-8 h-8 text-white group-hover:text-yellow-300 transition-colors" />
    </div>
    <span className="text-white/80 font-medium">{text}</span>
  </div>
);

export default FestiveMessage;
