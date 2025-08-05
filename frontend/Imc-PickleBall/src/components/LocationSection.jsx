import React from 'react';

const LocationSection = () => {
  return (
    <section className="location-section bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Find Us Here
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Google Maps Embed */}
          <div className="bg-slate-50 p-8 rounded-2xl shadow-lg">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d72.8074033!3d19.3796765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1503bc5c5e3%3A0x1234567890abcdef!2sInnocent%20Memorial%20Centre!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="IMC Pickleball Court Location"
              ></iframe>
              
              {/* Location Pin Overlay */}
              <div className="absolute top-4 left-4 bg-slate-800/90 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                📍 Live Location
              </div>
            </div>
            
            {/* Quick Action Buttons */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://maps.app.goo.gl/xDk89UJNAYkwnDqe9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                🗺️ Open in Maps
              </a>
              <button className="flex-1 bg-white hover:bg-slate-50 text-slate-800 font-semibold py-3 px-4 rounded-xl border border-slate-300 transition-colors flex items-center justify-center gap-2">
                🧭 Get Directions
              </button>
            </div>
          </div>
          
          {/* Location Details */}
          <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Court Information
            </h3>
            
            <div className="space-y-6">
              <div className="border-b border-slate-700 pb-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">📍</span>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-1">Address:</h4>
                    <p className="text-slate-300 leading-relaxed">
                      9RJ5+774, Chulna, Vasai West<br/>
                      Vasai-Virar, Maharashtra 401202
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-slate-700 pb-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">🕒</span>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-1">Operating Hours:</h4>
                    <p className="text-slate-300 leading-relaxed">
                      6:00 AM - 10:00 PM<br/>
                      All Days of the Week
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-slate-700 pb-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">📞</span>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-1">Contact:</h4>
                    <p className="text-slate-300 leading-relaxed">
                      +91 XXXXX XXXXX<br/>
                      imc.pickleball@email.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-b border-slate-700 pb-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">💰</span>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-1">Pricing:</h4>
                    <p className="text-slate-300 leading-relaxed">
                      ₹450 per hour<br/>
                      Special packages available
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 text-xl">🚗</span>
                  <div>
                    <h4 className="font-semibold text-green-400 mb-1">Parking:</h4>
                    <p className="text-slate-300 leading-relaxed">
                      Free parking available<br/>
                      Easy access from main road
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105">
                🏓 Book Now
              </button>
              <a 
                href="tel:+91XXXXXXXXX"
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Additional Nearby Information */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
            How to Reach
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="font-bold text-slate-800 mb-2">By Car</h3>
              <p className="text-slate-600">Easy access via Vasai-Virar road. Free parking available on premises.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🚂</div>
              <h3 className="font-bold text-slate-800 mb-2">By Train</h3>
              <p className="text-slate-600">Nearest station: Vasai Road. Short auto/cab ride to the venue.</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🚌</div>
              <h3 className="font-bold text-slate-800 mb-2">By Bus</h3>
              <p className="text-slate-600">Regular bus service available. Multiple bus stops nearby.</p>
            </div>
          </div>
        </div>
        
        {/* Court Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-slate-800 text-white rounded-xl">
            <div className="text-4xl mb-4">❄️</div>
            <h3 className="font-bold mb-2">Air Conditioned</h3>
            <p className="text-slate-300">Comfortable indoor environment for all weather conditions</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800 text-white rounded-xl">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-bold mb-2">Professional Standards</h3>
            <p className="text-slate-300">Regulation size court with high-quality equipment</p>
          </div>
          
          <div className="text-center p-6 bg-slate-800 text-white rounded-xl">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold mb-2">Modern Facilities</h3>
            <p className="text-slate-300">LED lighting, proper ventilation, and safety features</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
