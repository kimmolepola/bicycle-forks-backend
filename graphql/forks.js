const headers = ['id,brand,model,tapered,diameter,threaded,rake,atoc,brake,blade,steerer,eylets,clearance,axle,steererlength,weight,modelyear,image,imageauthor,vendors',
  'id,Brand,Model,Tapered,Steerer Tube Diameter (inches),Threaded,Fork Rake/Offset (mm),Axle-to-Crown (A-C) (mm),Brake Mount,Blade Material,Steerer Material,Eylets,Tyre Clearance,Axle Compatibility,Steerer Tube Length,Weight,Model Year,Image,Image Author,Vendors',
  'text,text,text,boolean,numeric,boolean,numeric,numeric,text,text,text,boolean,numeric,text,numeric,numeric,date, text,text,text',
];
const forks = ['1,8-Bar Bikes,Super Carbon Track Fork,no,1 1/8,no,36,370,Caliper,Carbon,Aluminum,,,,,,,,,',
  '2,17Teeth,Evo 1.5 Full Carbon Fork,yes,1 1/8 to 1 1/2,no,45,,Caliper,Carbon,Carbon,,,,,,,,,',
  '3,17Teeth,Kero Straight Fork,no,1 1/8,no,45,,Caliper,Carbon,Aluminum,,,,,,,,,',
  '4,17Teeth,Kero Curved Fork,no,1 1/8,no,45,,Caliper,Carbon,Aluminum,,,,,,,,,',
  '5,All-City,Thunderdome Track Fork,no,1 1/8,no,30,371,Caliper,Carbon,Aluminum,,,,,,,,,',
  '6,All-City,Big Block Track Fork,no,1 1/8,no,30,375,Caliper,Steel,Steel,,,,,,,,,',
  '7,All-City,Big Block Track Fork,no,1,no,30,375,Caliper,Steel,Steel,,,,,,,,,',
  '8,Alpina,F04 Track Fork,no,1 1/8,no,30,370,Caliper,Carbon,Aluminum,,,,,,,,,',
  '65,Alpina,F04 Track Fork,no,1 1/8,no,30,370,N/A,Carbon,Aluminum,,,,,,,,,',
  '9,Alpina,Wing Pista Fork,no,1 1/8,no,30,370,N/A,Carbon,Carbon,,,,,,,,,',
  '10,Aventón,Mataro Aluminum Fork,no,1 1/8,no,45,,Caliper,Aluminum,Aluminum,,,,,,,,,',
  '11,Aventón,Lite Carbon Fork,no,1 1/8,no,45,370,Caliper,Carbon,Aluminum,,,,,,,,,',
  '12,Aventón,SL Full Carbon Fiber Fork,no,1 1/8,no,45,370,Caliper,Carbon,Carbon,,,,,,,,,',
  '13,BreakBrake17 Co. (BB17),Tapered Carbon Track Fork,yes,1 1/8 to 1 1/2,no,37,372,Caliper,Carbon,Aluminum,,,,,,,,,',
  '14,BreakBrake17 Co. (BB17),Transfer Track Fork,no,1 1/8,no,36,365,Caliper,Aluminum,Aluminum,,,,,,,,,',
  '15,Brick Lane Bikes (BLB),Aluminum Fork,no,1 1/8,no,30,,Caliper,Aluminum,Aluminum,,,,,,,,,',
  '16,Brick Lane Bikes (BLB),Track Fork,no,1 1/8,no,30,,Caliper,Steel,Steel,,,,,,,,,',
  '17,Brick Lane Bikes (BLB),B30 Fork,no,1 1/8,no,30,,Caliper,Carbon,Aluminum,,,,,,,,,',
  '18,Brick Lane Bikes (BLB),Double Crown Fork,no,1,yes,30,,Caliper,Steel,Steel,,,,,,,,,',
  '19,Brick Lane Bikes (BLB),Eagel Fork,no,1,yes,30,,Caliper,Steel,Steel,,,,,,,,,',
  '20,Columbus,Columbus/Cinelli Track Fork,no,1 1/8,no,35,370,Caliper,Carbon,Aluminum,,,,,,,,,',
  '21,Columbus,Pista Leggera Fork,yes,1 1/8 to 1 1/2,no,35,,Caliper,Carbon,Aluminum,,,,,,,,,',
  '66,Columbus,Pista Leggera Fork,yes,1 1/8 to 1 1/2,no,35,,N/A,Carbon,Aluminum,,,,,,,,,',
  '22,Crew Bike Co.,Full Carbon Fiber Track Fork,no,1 1/8,no,35,,Caliper,Carbon,Carbon,,,,,,,,,',
  '23,Crew Bike Co.,District Carbon Fiber Track Fork,no,1 1/8,no,45,,Caliper,Carbon,Aluminum,,,,,,,,,',
  '24,Essor,Carbon Fiber Bladed Fork,no,1 1/8,no,45,394,Caliper,Carbon,Carbon,,,,,,,,,',
  '25,Factory 5 (F5),Crown Fork,no,1,yes,35,350,Caliper,Steel,Steel,,,,,,,,,',
  '67,Factory 5 (F5),Crown Fork,no,1,yes,35,350,N/A,Steel,Steel,,,,,,,,,',
  '26,Factory 5 (F5),Lithe Fork,no,1 1/8,no,35,347,Caliper,Steel,Steel,,,,,,,,,',
  '68,Factory 5 (F5),Lithe Fork,no,1 1/8,no,35,347,N/A,Steel,Steel,,,,,,,,,',
  '27,FBM,Ballista Fork,no,1 1/8,no,35,375,Cantilever,Steel,Steel,,,,,,,,,',
  '69,FBM,Ballista Fork,no,1 1/8,no,35,375,Disc,Steel,Steel,,,,,,,,,',
  '28,FBM,Sword Fork,no,1 1/8,no,35,375,Caliper,Steel,Steel,,,,,,,,,',
  '29,FBM,Sword Fork,no,1,no,35,375,Caliper,Steel,Steel,,,,,,,,,',
  '30,Fyxation,Eastside Track Fork,no,1 1/8,no,38,380,Caliper,Steel,Steel,,,,,,,,,',
  '31,Leader,I805TR Tapered Fork,yes,1 1/8 to 1 1/2,no,28,368,Caliper,Carbon,Aluminum,,,,,,,,,',
  '32,Leader,I803 Fork,no,1 1/8,no,28,368,Caliper,Carbon,Aluminum,,,,,,,,,',
  '33,Leader,I806TR Tapered Fork,yes,1 1/8 to 1 1/2,no,28,368,Caliper,Carbon,Carbon,,,,,,,,,',
  '34,Leader,S805 Fork,no,1 1/8,no,28,368,Caliper,Carbon,Steel,,,,,,,,,',
  '35,Leader,S803 V2 Fork,no,1 1/8,no,28,368,Caliper,Steel,Steel,,,,,,,,,',
  '36,No. 22,Carbon Track Fork,yes,1 1/8 to 1 1/2,no,38,369,Caliper,Carbon,Carbon,,,,,,,,,',
  '70,No. 22,Carbon Track Fork,yes,1 1/8 to 1 1/2,no,38,369,N/A,Carbon,Carbon,,,,,,,,,',
  '37,Pake,Straight Blade Track Fork,no,1 1/8,no,38,383,Caliper,Steel,Steel,,,,,,,,,',
  '38,Pake,Unicrown CrMo Fork,no,1,no,38,356,Caliper,Steel,Steel,,,,,,,,,',
  '39,Pake,Carbon Track Fork,no,1 1/8,no,38,,Caliper,Carbon,Aluminum,,,,,,,,,',
  '40,Pake,Disc Track Fork,no,1 1/8,no,38,384,Caliper,Carbon,Aluminum,,,,,,,,,',
  '71,Pake,Disc Track Fork,no,1 1/8,no,38,384,Disc,Carbon,Aluminum,,,,,,,,,',
  '41,Planet-X,Pro Carbon Track Fork,no,1 1/8,no,25,,N/A,Carbon,Carbon,,,,,,,,,',
  '42,SKREAM,Viber Fork V2,no,1 1/8,no,29,,N/A,Carbon,Aluminum,,,,,,,,,',
  '43,Soma Fabrications,Curved Blade Track Fork,no,1,no,30,363,Caliper,Steel,Steel,,,,,,,,,',
  '44,Soma Fabrications,Curved Blade Track Fork,no,1,no,38,363,Caliper,Steel,Steel,,,,,,,,,',
  '45,Soma Fabrications,Curved Blade Track Fork,no,1,yes,41,363,Caliper,Steel,Steel,,,,,,,,,',
  '46,Soma Fabrications,Straight Blade Track Fork,no,1,yes,41,365,Caliper,Steel,Steel,,,,,,,,,',
  '47,Soma Fabrications,Straight Blade Track Fork,no,1,no,38,365,Caliper,Steel,Steel,,,,,,,,,',
  '48,Soma Fabrications,Straight Blade Track Fork,no,1 1/8,no,41,365,Caliper,Steel,Steel,,,,,,,,,',
  '49,Soma Fabrications,Classic Curve Track Fork,no,1,no,38,,Caliper,Steel,Steel,,,,,,,,,',
  '50,State Bicycle Co.,Carbon Fiber Fork,no,1 1/8,no,45,375,Caliper,Carbon,Aluminum,,,,,,,,,',
  '51,Surly,Steamroller Fork,no,1 1/8,no,38,375,Caliper,Steel,Steel,,,,,,,,,',
  '52,Surly,Steamroller Fork,no,1,no,38,368,Caliper,Steel,Steel,,,,,,,,,',
  '53,Tange,Curved Blade Track Fork,no,1,yes,38,365,Caliper,Steel,Steel,,,,,,,,,',
  '54,Tange,Straight Blade Track Fork,no,1,yes,38,365,Caliper,Steel,Steel,,,,,,,,,',
  '55,Tange,Straight Blade Track Fork,no,1,no,41,365,Caliper,Steel,Steel,,,,,,,,,',
  '56,Tange,Straight Blade Track Fork,no,1 1/8,no,41,365,Caliper,Steel,Steel,,,,,,,,,',
  '57,Tange,Unicrown Track Fork,no,1 1/8,no,38,383,Caliper,Steel,Steel,,,,,,,,,',
  '58,Tange,Prestige Track Fork,no,1,yes,38,369,Caliper,Steel,Steel,,,,,,,,,',
  '59,Unknown Bike Co.,Full Carbon Fork,no,1 1/8,no,38,,Caliper,Carbon,Carbon,,,,,,,,,',
  '60,Unknown Bike Co.,Carbon Alloy Fork,no,1 1/8,no,30,,Caliper,Carbon,Aluminum,,,,,,,,,',
  '61,Velodrome Shop,Track Cycling Fork,no,1 1/8,no,38,390,Caliper,Carbon,Aluminum,,,,,,,,,',
  '72,Velodrome Shop,Track Cycling Fork,no,1 1/8,no,38,390,N/A,Carbon,Aluminum,,,,,,,,,',
  '62,Wound Up Composites,Zephyr Track Fork,no,1 1/8,no,35,365, custom,Caliper,Carbon,Carbon,,,,,,,,,',
  '63,Wound Up Composites,Zephyr Track Fork,no,1,no,35,365, custom,Caliper,Carbon,Steel,,,,,,,,,',
  '64,Wound Up Composites,Zephyr Track Fork,no,1,yes,35,365, custom,Caliper,Carbon,Steel,,,,,,,,,'];

module.exports = { headers, forks };
