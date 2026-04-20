import { useState } from 'react';
import '../styles/buddy-finder.css';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedChips, setSelectedChips] = useState<Record<string, boolean>>({
    'pune': true,
    'food': true,
    'tech': true,
    'music': true,
    'explorer': true
  });
  const [mapPreview, setMapPreview] = useState({ show: false, name: '', info: '', img: '' });
  const [radiusValue, setRadiusValue] = useState(5);

  const go = (id: string) => {
    setCurrentScreen(id);
  };

  const toggleChip = (id: string) => {
    setSelectedChips(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const showPrev = (name: string, info: string, img: string) => {
    setMapPreview({ show: true, name, info, img });
  };

  const hidePrev = () => {
    setMapPreview({ ...mapPreview, show: false });
  };

  return (
    <>
      <div className="stage">
        <div className="phone">

          {/* 1. SPLASH */}
          <div className={`screen ${currentScreen === 'splash' ? 'on' : ''}`} id="sc-splash">
            <div className="sb">
              <span className="sb-t">9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px' }}></div>
                <div className="b" style={{ height: '6px' }}></div>
                <div className="b" style={{ height: '9px' }}></div>
                <div className="b" style={{ height: '12px' }}></div>
              </div>
            </div>
            <div className="splash-wrap">
              <div className="splash-ring">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <circle cx="22" cy="22" r="22" fill="#76A588"/>
                  <path d="M14 26c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="22" cy="16" r="4" fill="#fff"/>
                  <path d="M8 32c1.5-2.5 5-4 8-4M36 32c-1.5-2.5-5-4-8-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity=".6"/>
                </svg>
              </div>
              <div className="splash-name">Buddy Finder</div>
              <div className="splash-tag">Find your people,<br />wherever life takes you.</div>
              <div className="face-row">
                <div className="face-sm"><img src="https://randomuser.me/api/portraits/men/91.jpg" alt="user" /></div>
                <div className="face-sm"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="user" /></div>
                <div className="face-sm"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user" /></div>
                <div className="face-sm"><img src="https://randomuser.me/api/portraits/women/68.jpg" alt="user" /></div>
              </div>
              <div className="count-txt">2,140+ buddies in Bengaluru</div>
              <button className="btn-p" onClick={() => go('login')}>Get started</button>
              <button className="btn-o" onClick={() => go('login')}>I already have an account</button>
              <button className="btn-g" onClick={() => go('discover')}>Explore without signing up</button>
            </div>
          </div>

          {/* 2. LOGIN */}
          <div className={`screen ${currentScreen === 'login' ? 'on' : ''}`} id="sc-login">
            <div className="auth-hero">
              <div className="auth-logo">Buddy Finder</div>
              <div className="auth-sub-txt">Welcome back</div>
            </div>
            <div className="auth-body">
              <div className="auth-title">Log in</div>
              <div className="auth-desc">Good to see you again. Your people are waiting.</div>
              <label className="lbl">Phone or email</label>
              <input className="inp" placeholder="+91 98765 43210" type="text" />
              <label className="lbl">Password</label>
              <input className="inp" placeholder="Enter your password" type="password" />
              <span className="forgot">Forgot password?</span>
              <button className="btn-p" onClick={() => go('discover')}>Log in</button>
              <div className="divrow"><span>or continue with</span></div>
              <button className="soc-btn" onClick={() => go('discover')}>
                <span style={{ fontSize: '15px' }}>G</span>Continue with Google
              </button>
              <button className="soc-btn" onClick={() => go('discover')}>
                <span style={{ fontSize: '15px' }}>📱</span>Continue with Phone OTP
              </button>
              <div className="auth-sw">Don't have an account? <b onClick={() => go('signup')}>Sign up</b></div>
            </div>
          </div>

          {/* 3. SIGN UP */}
          <div className={`screen ${currentScreen === 'signup' ? 'on' : ''}`} id="sc-signup">
            <div className="sb">
              <span className="sb-t">9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px' }}></div>
                <div className="b" style={{ height: '6px' }}></div>
                <div className="b" style={{ height: '9px' }}></div>
                <div className="b" style={{ height: '12px' }}></div>
              </div>
            </div>
            <div className="step-bars">
              <div className="sbar act"></div>
              <div className="sbar"></div>
              <div className="sbar"></div>
            </div>
            <div className="auth-body" style={{ paddingTop: '18px' }}>
              <div className="auth-title">Create account</div>
              <div className="auth-desc">Under 2 minutes. No long forms.</div>
              <label className="lbl">Full name</label>
              <input className="inp" placeholder="Arjun Sharma" type="text" />
              <label className="lbl">Phone number</label>
              <input className="inp" placeholder="+91 98765 43210" type="text" />
              <label className="lbl">Password</label>
              <input className="inp" placeholder="Min. 8 characters" type="password" />
              <label className="lbl">Current city</label>
              <input className="inp" placeholder="Bengaluru, Karnataka" type="text" />
              <button className="btn-p" onClick={() => go('hometown')}>Continue →</button>
              <div className="divrow"><span>or sign up with</span></div>
              <button className="soc-btn" onClick={() => go('hometown')}>
                <span style={{ fontSize: '15px' }}>G</span>Continue with Google
              </button>
              <div className="auth-sw">Already have an account? <b onClick={() => go('login')}>Log in</b></div>
            </div>
          </div>

          {/* 4. HOMETOWN */}
          <div className={`screen ${currentScreen === 'hometown' ? 'on' : ''}`} id="sc-hometown">
            <div className="sb">
              <span className="sb-t">9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px' }}></div>
                <div className="b" style={{ height: '6px' }}></div>
                <div className="b" style={{ height: '9px' }}></div>
                <div className="b" style={{ height: '12px' }}></div>
              </div>
            </div>
            <div className="step-bars">
              <div className="sbar done"></div>
              <div className="sbar act"></div>
              <div className="sbar"></div>
            </div>
            <div className="ob-head">
              <div className="ob-badge">
                <span style={{ fontSize: '12px' }}>🏡</span>
                <span className="ob-badge-t">City Connect</span>
              </div>
              <div className="ob-h">Where are you originally from?</div>
              <div className="ob-s">People connect 3× faster with someone from the same hometown.</div>
            </div>
            <div className="ob-body">
              <input className="inp" placeholder="Search hometown or state..." type="text" style={{ marginBottom: '12px' }} />
              <div className="sec-lbl">Popular hometowns</div>
              <div className="chip-grid">
                <div className={`chip ${selectedChips['pune'] ? 'on' : ''}`} onClick={() => toggleChip('pune')}>🏙️ Pune</div>
                <div className={`chip ${selectedChips['jaipur'] ? 'on' : ''}`} onClick={() => toggleChip('jaipur')}>🌆 Jaipur</div>
                <div className={`chip ${selectedChips['lucknow'] ? 'on' : ''}`} onClick={() => toggleChip('lucknow')}>🌇 Lucknow</div>
                <div className={`chip ${selectedChips['patna'] ? 'on' : ''}`} onClick={() => toggleChip('patna')}>🏘️ Patna</div>
                <div className={`chip ${selectedChips['nagpur'] ? 'on' : ''}`} onClick={() => toggleChip('nagpur')}>🌃 Nagpur</div>
                <div className={`chip ${selectedChips['surat'] ? 'on' : ''}`} onClick={() => toggleChip('surat')}>🏙️ Surat</div>
                <div className={`chip ${selectedChips['kochi'] ? 'on' : ''}`} onClick={() => toggleChip('kochi')}>🌆 Kochi</div>
                <div className={`chip ${selectedChips['chandigarh'] ? 'on' : ''}`} onClick={() => toggleChip('chandigarh')}>🌇 Chandigarh</div>
                <div className={`chip ${selectedChips['indore'] ? 'on' : ''}`} onClick={() => toggleChip('indore')}>🏘️ Indore</div>
                <div className={`chip ${selectedChips['coimbatore'] ? 'on' : ''}`} onClick={() => toggleChip('coimbatore')}>🌃 Coimbatore</div>
              </div>
              <div className="why-box">
                <div className="why-t">Why we ask this</div>
                <div className="why-s">Shared hometown = instant common ground. Shown as city-level only — never your locality. You can hide this anytime.</div>
              </div>
              <div className="sec-lbl">Your current city</div>
              <div className="cur-city-pill">📍 Bengaluru, Karnataka</div>
              <button className="btn-p" style={{ marginTop: '16px' }} onClick={() => go('interests')}>Continue →</button>
              <button className="btn-g" onClick={() => go('interests')}>Skip this step</button>
            </div>
          </div>

          {/* 5. INTERESTS */}
          <div className={`screen ${currentScreen === 'interests' ? 'on' : ''}`} id="sc-interests">
            <div className="sb">
              <span className="sb-t">9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px' }}></div>
                <div className="b" style={{ height: '6px' }}></div>
                <div className="b" style={{ height: '9px' }}></div>
                <div className="b" style={{ height: '12px' }}></div>
              </div>
            </div>
            <div className="step-bars">
              <div className="sbar done"></div>
              <div className="sbar done"></div>
              <div className="sbar act"></div>
            </div>
            <div className="ob-head">
              <div className="ob-h">Pick your vibe</div>
              <div className="ob-s">Choose 3 or more. We'll find buddies who match your energy.</div>
            </div>
            <div className="ob-body">
              <div className="sec-lbl">Interests</div>
              <div className="chip-grid">
                <div className={`chip ${selectedChips['food'] ? 'on' : ''}`} onClick={() => toggleChip('food')}>🍜 Food</div>
                <div className={`chip ${selectedChips['fitness'] ? 'on' : ''}`} onClick={() => toggleChip('fitness')}>💪 Fitness</div>
                <div className={`chip ${selectedChips['tech'] ? 'on' : ''}`} onClick={() => toggleChip('tech')}>💻 Tech</div>
                <div className={`chip ${selectedChips['gaming'] ? 'on' : ''}`} onClick={() => toggleChip('gaming')}>🎮 Gaming</div>
                <div className={`chip ${selectedChips['music'] ? 'on' : ''}`} onClick={() => toggleChip('music')}>🎵 Music</div>
                <div className={`chip ${selectedChips['study'] ? 'on' : ''}`} onClick={() => toggleChip('study')}>📚 Study</div>
                <div className={`chip ${selectedChips['travel'] ? 'on' : ''}`} onClick={() => toggleChip('travel')}>✈️ Travel</div>
                <div className={`chip ${selectedChips['cricket'] ? 'on' : ''}`} onClick={() => toggleChip('cricket')}>🏏 Cricket</div>
                <div className={`chip ${selectedChips['wellness'] ? 'on' : ''}`} onClick={() => toggleChip('wellness')}>🧘 Wellness</div>
                <div className={`chip ${selectedChips['cycling'] ? 'on' : ''}`} onClick={() => toggleChip('cycling')}>🚴 Cycling</div>
                <div className={`chip ${selectedChips['cafes'] ? 'on' : ''}`} onClick={() => toggleChip('cafes')}>☕ Cafes</div>
                <div className={`chip ${selectedChips['culture'] ? 'on' : ''}`} onClick={() => toggleChip('culture')}>🎭 Culture</div>
              </div>
              <div className="sec-lbl" style={{ marginTop: '4px' }}>Looking for</div>
              <div className="chip-grid">
                <div className={`chip ${selectedChips['gym'] ? 'on' : ''}`} onClick={() => toggleChip('gym')}>💪 Gym buddy</div>
                <div className={`chip ${selectedChips['explorer'] ? 'on' : ''}`} onClick={() => toggleChip('explorer')}>🗺️ City explorer</div>
                <div className={`chip ${selectedChips['coffee'] ? 'on' : ''}`} onClick={() => toggleChip('coffee')}>☕ Coffee chats</div>
                <div className={`chip ${selectedChips['studypartner'] ? 'on' : ''}`} onClick={() => toggleChip('studypartner')}>📖 Study partner</div>
              </div>
              <button className="btn-p" style={{ marginTop: '8px' }} onClick={() => go('discover')}>Start exploring →</button>
            </div>
          </div>

          {/* 6. DISCOVER */}
          <div className={`screen ${currentScreen === 'discover' ? 'on' : ''}`} id="sc-discover">
            <div className="sb" style={{ background: 'var(--white)' }}>
              <span className="sb-t">9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px' }}></div>
                <div className="b" style={{ height: '6px' }}></div>
                <div className="b" style={{ height: '9px' }}></div>
                <div className="b" style={{ height: '12px' }}></div>
              </div>
            </div>
            <div className="disc-sb">
              <div className="logo-txt">Buddy<span>.</span></div>
              <div className="ic-row">
                <div className="ic-btn">🔔</div>
                <div className="ic-btn" onClick={() => go('safety')}>🛡️</div>
              </div>
            </div>
            <div className="disc-city">Koramangala · <b>2,140 nearby</b> · <b>38 from Pune</b></div>
            <div className="fbar">
              <div className="fc on">All</div>
              <div className="fc">🏡 From Pune</div>
              <div className="fc">🍜 Food</div>
              <div className="fc">💪 Fitness</div>
              <div className="fc">💻 Tech</div>
            </div>
            <div className="disc-scroll">
              <div style={{ padding: '12px 14px 0' }}>
                <div className="home-banner">
                  <span className="hb-icon">🏡</span>
                  <div style={{ flex: 1 }}>
                    <div className="hb-t">People from Pune nearby</div>
                    <div className="hb-s">Same streets, same food</div>
                  </div>
                  <div className="hb-count">38</div>
                </div>
              </div>

              {/* CARD 1 */}
              <div className="bcard" style={{ marginTop: '4px' }}>
                <div className="bcard-img-wrap">
                  <img className="bcard-img" src="https://randomuser.me/api/portraits/men/91.jpg" alt="Rahul D." />
                  <div className="online-pill">
                    <div className="online-dot"></div>
                    <span className="online-txt">Online</span>
                  </div>
                  <div className="dist-pill">1.4 km</div>
                  <div className="hometown-pill">
                    <div className="ht-dot"></div>
                    <span className="ht-txt">Also from Pune</span>
                  </div>
                </div>
                <div className="bcard-body">
                  <div className="bcard-name">Rahul D.</div>
                  <div className="bcard-role">26 · Data Engineer · In BLR 6 months</div>
                  <div className="btags">
                    <span className="btag">🏡 Pune</span>
                    <span className="btag">💻 Tech</span>
                    <span className="btag">🍜 Food</span>
                    <span className="btag">🏏 Cricket</span>
                  </div>
                  <div className="bactions">
                    <button className="btn-con" onClick={() => go('profile')}>🏡 Connect — fellow Punekar!</button>
                    <button className="btn-sk">✕</button>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bcard">
                <div className="bcard-img-wrap">
                  <img className="bcard-img" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sneha K." />
                  <div className="online-pill">
                    <div className="online-dot" style={{ background: '#FCD34D' }}></div>
                    <span className="online-txt">3h ago</span>
                  </div>
                  <div className="dist-pill">2.1 km</div>
                  <div className="hometown-pill">
                    <div className="ht-dot"></div>
                    <span className="ht-txt">Also from Pune</span>
                  </div>
                </div>
                <div className="bcard-body">
                  <div className="bcard-name">Sneha K.</div>
                  <div className="bcard-role">24 · MBA Student · In BLR 2 months</div>
                  <div className="btags">
                    <span className="btag">🏡 Pune</span>
                    <span className="btag">🎵 Music</span>
                    <span className="btag">☕ Cafes</span>
                  </div>
                  <div className="bactions">
                    <button className="btn-con" onClick={() => go('chat')}>🏡 Connect — fellow Punekar!</button>
                    <button className="btn-sk">✕</button>
                  </div>
                </div>
              </div>

              <div style={{ margin: '4px 14px 10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--n3)' }}></div>
                <div style={{ padding: '3px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: 600, background: 'var(--n2)', color: 'var(--muted)' }}>Other nearby</div>
                <div style={{ flex: 1, height: '1px', background: 'var(--n3)' }}></div>
              </div>

              {/* CARD 3 */}
              <div className="bcard">
                <div className="bcard-img-wrap">
                  <img className="bcard-img" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Priya M." />
                  <div className="online-pill">
                    <div className="online-dot"></div>
                    <span className="online-txt">Online</span>
                  </div>
                  <div className="dist-pill">2.8 km</div>
                </div>
                <div className="bcard-body">
                  <div className="bcard-name">Priya M.</div>
                  <div className="bcard-role">29 · UX Designer · In BLR 2 months</div>
                  <div className="btags">
                    <span className="btag">🎵 Music</span>
                    <span className="btag">🧘 Yoga</span>
                    <span className="btag">☕ Cafes</span>
                  </div>
                  <div className="bactions">
                    <button className="btn-con" onClick={() => go('profile')}>👋 Connect</button>
                    <button className="btn-sk">✕</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bnav">
              <div className="ni on">
                <div className="ni-icon">🏠</div>
                <div className="ni-lbl">Home</div>
              </div>
              <div className="ni" onClick={() => go('map')}>
                <div className="ni-icon">🗺️</div>
                <div className="ni-lbl">Map</div>
              </div>
              <div className="ni" onClick={() => go('rooms')}>
                <div className="ni-icon">🏘️</div>
                <div className="ni-lbl">Rooms</div>
              </div>
              <div className="ni" onClick={() => go('chat')}>
                <div className="ni-icon">💬</div>
                <div className="ni-lbl">Chats</div>
                <div className="ndot"></div>
              </div>
              <div className="ni" onClick={() => go('profile')}>
                <div className="ni-icon">👤</div>
                <div className="ni-lbl">Profile</div>
              </div>
            </div>
          </div>

          {/* 7. MAP */}
          <div className={`screen ${currentScreen === 'map' ? 'on' : ''}`} id="sc-map">
            <div className="sb" style={{ background: 'var(--white)' }}>
              <span className="sb-t">9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px' }}></div>
                <div className="b" style={{ height: '6px' }}></div>
                <div className="b" style={{ height: '9px' }}></div>
                <div className="b" style={{ height: '12px' }}></div>
              </div>
            </div>
            <div className="map-head">
              <div className="map-ht">Nearby Buddies</div>
              <div className="ic-btn">🔍</div>
            </div>
            <div className="map-area" onClick={hidePrev}>
              <div className="mgrid"></div>
              <div className="mroad" style={{ top: '35%', left: 0, right: 0, height: '8px' }}></div>
              <div className="mroad" style={{ top: '62%', left: 0, right: 0, height: '8px' }}></div>
              <div className="mroad" style={{ left: '30%', top: 0, bottom: 0, width: '8px' }}></div>
              <div className="mroad" style={{ left: '65%', top: 0, bottom: 0, width: '8px' }}></div>
              <div className="mpulse" style={{ top: 'calc(50% - 20px)', left: 'calc(50% - 20px)' }}></div>
              <div className="mpin" style={{ width: '40px', height: '40px', top: 'calc(50% - 20px)', left: 'calc(50% - 20px)', background: 'var(--p3)', borderColor: '#fff' }}>
                <span style={{ color: '#fff', fontSize: '16px' }}>📍</span>
              </div>
              <div className="mring" style={{ top: 'calc(50% - 72px)', left: 'calc(50% - 72px)', width: '144px', height: '144px' }}></div>
              <div className="mpin" style={{ width: '38px', height: '38px', top: '20%', left: '15%' }} onClick={() => showPrev('Rahul D.', '1.4km · Pune · Tech', 'https://randomuser.me/api/portraits/men/91.jpg')}>
                <img src="https://randomuser.me/api/portraits/men/91.jpg" alt="Rahul" />
              </div>
              <div className="mpin" style={{ width: '38px', height: '38px', top: '17%', left: '57%' }} onClick={() => showPrev('Sneha K.', '2.1km · Pune · Music', 'https://randomuser.me/api/portraits/women/44.jpg')}>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sneha" />
              </div>
              <div className="mpin" style={{ width: '38px', height: '38px', top: '65%', left: '68%' }} onClick={() => showPrev('Priya M.', '2.8km · Music · Cafes', 'https://randomuser.me/api/portraits/women/68.jpg')}>
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Priya" />
              </div>
              <div className="mpin" style={{ width: '38px', height: '38px', top: '67%', left: '17%' }} onClick={() => showPrev('Rohan K.', '3.5km · Cycling · Games', 'https://randomuser.me/api/portraits/men/32.jpg')}>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Rohan" />
              </div>

              <div className={`map-prev ${mapPreview.show ? 'show' : ''}`} id="mprev">
                <div className="mp-av">
                  <img src={mapPreview.img} alt="" />
                </div>
                <div>
                  <div className="mp-name">{mapPreview.name}</div>
                  <div className="mp-info">{mapPreview.info}</div>
                  <button className="mp-btn" onClick={() => go('profile')}>View profile</button>
                </div>
              </div>
            </div>

            <div className="map-ctrl">
              <div className="rad-card">
                <span className="rad-lbl">Radius</span>
                <input
                  type="range"
                  className="rad-sl"
                  min="1"
                  max="10"
                  value={radiusValue}
                  step="1"
                  onChange={(e) => setRadiusValue(Number(e.target.value))}
                />
                <span className="rad-val">{radiusValue}km</span>
              </div>
            </div>

            <div className="bnav">
              <div className="ni" onClick={() => go('discover')}>
                <div className="ni-icon">🏠</div>
                <div className="ni-lbl">Home</div>
              </div>
              <div className="ni on">
                <div className="ni-icon">🗺️</div>
                <div className="ni-lbl">Map</div>
              </div>
              <div className="ni" onClick={() => go('rooms')}>
                <div className="ni-icon">🏘️</div>
                <div className="ni-lbl">Rooms</div>
              </div>
              <div className="ni" onClick={() => go('chat')}>
                <div className="ni-icon">💬</div>
                <div className="ni-lbl">Chats</div>
              </div>
              <div className="ni" onClick={() => go('profile')}>
                <div className="ni-icon">👤</div>
                <div className="ni-lbl">Profile</div>
              </div>
            </div>
          </div>

          {/* 8. ROOMS */}
          <div className={`screen ${currentScreen === 'rooms' ? 'on' : ''}`} id="sc-rooms">
            <div className="sb" style={{ background: 'var(--white)' }}>
              <span className="sb-t">9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px' }}></div>
                <div className="b" style={{ height: '6px' }}></div>
                <div className="b" style={{ height: '9px' }}></div>
                <div className="b" style={{ height: '12px' }}></div>
              </div>
            </div>
            <div className="room-head">
              <div className="map-ht">Activity Rooms</div>
              <div className="ic-btn">＋</div>
            </div>
            <div style={{ padding: '4px 18px 10px', fontSize: '11px', color: 'var(--muted)', background: 'var(--white)', borderBottom: '1px solid var(--n2)', flexShrink: 0 }}>
              Group up first, connect 1:1 later · Rooms expire in 48h
            </div>
            <div className="room-scroll">
              <div className="sec-head-row">
                <div className="shline"></div>
                <div className="shbadge">🏡 Hometown rooms</div>
                <div className="shline"></div>
              </div>
              <div className="rcard ht">
                <div className="r-icon">🏡</div>
                <div className="r-info">
                  <div className="r-name">Pune Gang — BLR</div>
                  <div className="r-meta">38 members · Koramangala</div>
                </div>
                <div className="r-right">
                  <div className="r-exp">48h</div>
                  <button className="r-join">Join</button>
                </div>
              </div>
              <div className="rcard ht">
                <div className="r-icon">🍜</div>
                <div className="r-info">
                  <div className="r-name">Pune Food Trail BLR</div>
                  <div className="r-meta">12 members · Finding misal pav</div>
                </div>
                <div className="r-right">
                  <div className="r-exp">24h</div>
                  <button className="r-join">Join</button>
                </div>
              </div>

              <div className="sec-head-row">
                <div className="shline"></div>
                <div className="shbadge">🌍 All activity rooms</div>
                <div className="shline"></div>
              </div>
              <div className="rcard">
                <div className="r-icon">🚴</div>
                <div className="r-info">
                  <div className="r-name">Sunday Cycling — Koramangala</div>
                  <div className="r-meta">8 members · 6am start</div>
                </div>
                <div className="r-right">
                  <div className="r-exp">36h</div>
                  <button className="r-join">Join</button>
                </div>
              </div>
              <div className="rcard">
                <div className="r-icon">📚</div>
                <div className="r-info">
                  <div className="r-name">UPSC Study Group — Aundh</div>
                  <div className="r-meta">6 members · Daily 7–9pm</div>
                </div>
                <div className="r-right">
                  <div className="r-exp">48h</div>
                  <button className="r-join">Join</button>
                </div>
              </div>
              <div className="rcard">
                <div className="r-icon">🍜</div>
                <div className="r-info">
                  <div className="r-name">Irani Chai Crawl — MG Road</div>
                  <div className="r-meta">10 members · This Saturday</div>
                </div>
                <div className="r-right">
                  <div className="r-exp">20h</div>
                  <button className="r-join">Join</button>
                </div>
              </div>
            </div>

            <div className="bnav">
              <div className="ni" onClick={() => go('discover')}>
                <div className="ni-icon">🏠</div>
                <div className="ni-lbl">Home</div>
              </div>
              <div className="ni" onClick={() => go('map')}>
                <div className="ni-icon">🗺️</div>
                <div className="ni-lbl">Map</div>
              </div>
              <div className="ni on">
                <div className="ni-icon">🏘️</div>
                <div className="ni-lbl">Rooms</div>
              </div>
              <div className="ni" onClick={() => go('chat')}>
                <div className="ni-icon">💬</div>
                <div className="ni-lbl">Chats</div>
              </div>
              <div className="ni" onClick={() => go('profile')}>
                <div className="ni-icon">👤</div>
                <div className="ni-lbl">Profile</div>
              </div>
            </div>
          </div>

          {/* 9. PROFILE */}
          <div className={`screen ${currentScreen === 'profile' ? 'on' : ''}`} id="sc-profile">
            <div className="sb" style={{ background: 'transparent', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }}>
              <span className="sb-t" style={{ color: '#fff' }}>9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px', background: '#fff' }}></div>
                <div className="b" style={{ height: '6px', background: '#fff' }}></div>
                <div className="b" style={{ height: '9px', background: '#fff' }}></div>
                <div className="b" style={{ height: '12px', background: '#fff' }}></div>
              </div>
            </div>
            <div className="prof-hero">
              <img className="prof-img" src="https://randomuser.me/api/portraits/men/91.jpg" alt="Rahul D." />
              <div className="prof-overlay">
                <div className="prof-name">Rahul Deshmukh</div>
                <div className="prof-city-txt">📍 Koramangala, BLR · Originally from Pune</div>
              </div>
              <div className="tbadge-row">
                <div className="tbadge">✓ Verified</div>
                <div className="tbadge">🏡 Punekar</div>
              </div>
            </div>
            <div className="prof-body">
              <div className="journey-card">
                <div className="jc-t">🏡 City Journey</div>
                <div className="jc-cities">
                  <div className="jc-city">🏘️ Pune</div>
                  <span style={{ color: 'var(--p2)', fontSize: '14px', fontWeight: 700 }}>→</span>
                  <div className="jc-city cur">📍 Bengaluru</div>
                </div>
                <div className="jc-quote">"FC Road kid, now surviving on Swiggy in Koramangala 😄"</div>
              </div>
              <div className="stats-row">
                <div className="stat hl">
                  <div className="stat-n">8</div>
                  <div className="stat-l">Pune buddies</div>
                </div>
                <div className="stat">
                  <div className="stat-n">14</div>
                  <div className="stat-l">Connections</div>
                </div>
                <div className="stat">
                  <div className="stat-n">97%</div>
                  <div className="stat-l">Reply rate</div>
                </div>
              </div>
              <div className="mutual-box">
                <span style={{ fontSize: '18px' }}>🤝</span>
                <div className="mut-t">3 shared interests: Tech, Food & Gaming</div>
              </div>
              <div className="divline"></div>
              <div className="sec-t">About</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '12px' }}>
                "Moved here for my first tech job. Love exploring food spots on weekends. Always down for football or late-night ramen."
              </div>
              <div className="divline"></div>
              <div className="sec-t">Interests</div>
              <div className="ptags">
                <span className="ptag">🏡 Pune</span>
                <span className="ptag">💻 Tech</span>
                <span className="ptag">🍜 Food</span>
                <span className="ptag">🏏 Cricket</span>
                <span className="ptag">🎵 Music</span>
              </div>
              <div className="divline"></div>
              <div className="sec-t">Looking for</div>
              <div className="looking-wrap">
                <div className="lk">💪 Gym buddy</div>
                <div className="lk">🏡 Fellow Punekar</div>
                <div className="lk">🗺️ City explorer</div>
              </div>
              <button className="btn-p" onClick={() => go('chat')}>🏡 Connect — you're both from Pune!</button>
            </div>

            <div className="bnav">
              <div className="ni" onClick={() => go('discover')}>
                <div className="ni-icon">🏠</div>
                <div className="ni-lbl">Home</div>
              </div>
              <div className="ni" onClick={() => go('map')}>
                <div className="ni-icon">🗺️</div>
                <div className="ni-lbl">Map</div>
              </div>
              <div className="ni" onClick={() => go('rooms')}>
                <div className="ni-icon">🏘️</div>
                <div className="ni-lbl">Rooms</div>
              </div>
              <div className="ni" onClick={() => go('chat')}>
                <div className="ni-icon">💬</div>
                <div className="ni-lbl">Chats</div>
              </div>
              <div className="ni on">
                <div className="ni-icon">👤</div>
                <div className="ni-lbl">Profile</div>
              </div>
            </div>
          </div>

          {/* 10. CHAT */}
          <div className={`screen ${currentScreen === 'chat' ? 'on' : ''}`} id="sc-chat">
            <div className="sb">
              <span className="sb-t">9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px' }}></div>
                <div className="b" style={{ height: '6px' }}></div>
                <div className="b" style={{ height: '9px' }}></div>
                <div className="b" style={{ height: '12px' }}></div>
              </div>
            </div>
            <div className="chat-head">
              <div className="ch-back" onClick={() => go('profile')}>←</div>
              <div className="ch-av-wrap">
                <img src="https://randomuser.me/api/portraits/men/91.jpg" alt="Rahul" />
              </div>
              <div className="ch-name-wrap">
                <div className="ch-name">Rahul D.</div>
                <div className="ch-sub">
                  <div className="ch-dot"></div>
                  Fellow Punekar · Online now
                </div>
              </div>
              <div className="ic-btn">⋯</div>
            </div>
            <div className="origin-bar">
              <span style={{ fontSize: '13px' }}>🏡</span>
              <span className="ob-t">You're both from Pune · FC Road area</span>
              <span className="ob-end">Insta bond!</span>
            </div>
            <div className="msgs">
              <div style={{ textAlign: 'center', fontSize: '10px', color: 'var(--muted2)', margin: '2px 0' }}>
                Today · 10:14 AM
              </div>
              <div className="msg them">Bhai tu bhi Pune se hai?! FC Road side se 😂</div>
              <div className="msg-t" style={{ alignSelf: 'flex-start', paddingLeft: '2px' }}>10:14 AM</div>
              <div className="msg me">Haan yaar! Kothrud. Tu Deccan side ka lagta hai 😄</div>
              <div className="msg-t" style={{ alignSelf: 'flex-end' }}>10:15 AM</div>
              <div className="msg them">Bengaluru mein Vada Pav dhundh raha tha 😭 kuch milta nahin proper</div>
              <div className="msg-t" style={{ alignSelf: 'flex-start', paddingLeft: '2px' }}>10:16 AM</div>
              <div className="msg me">Found one spot in Indiranagar — bilkul FC Road wala feel 🙌</div>
              <div className="msg-t" style={{ alignSelf: 'flex-end' }}>10:17 AM</div>
            </div>
            <div className="ice-wrap">
              <div className="ice-lbl">Hometown icebreakers</div>
              <div className="ice-row">
                <div className="ice">Miss FC Road?</div>
                <div className="ice">Best Pune spot?</div>
                <div className="ice">Why BLR?</div>
                <div className="ice">Up for food trail?</div>
              </div>
            </div>
            <div className="chat-in">
              <input className="ci" placeholder="Type a message..." type="text" />
              <button className="send">➤</button>
            </div>
          </div>

          {/* 11. SAFETY */}
          <div className={`screen ${currentScreen === 'safety' ? 'on' : ''}`} id="sc-safety">
            <div className="sb" style={{ background: 'var(--dark)' }}>
              <span className="sb-t" style={{ color: '#fff' }}>9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px', background: '#fff' }}></div>
                <div className="b" style={{ height: '6px', background: '#fff' }}></div>
                <div className="b" style={{ height: '9px', background: '#fff' }}></div>
                <div className="b" style={{ height: '12px', background: '#fff' }}></div>
              </div>
            </div>
            <div className="saf-hero">
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🛡️</div>
              <div className="saf-t">Your safety first.</div>
              <div className="saf-s">Every feature is built with your protection in mind.</div>
            </div>
            <div className="saf-body">
              <div className="tog-row">
                <div className="saf-icon">👩</div>
                <div style={{ flex: 1 }}>
                  <div className="saf-ct">Women-only visibility</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                    Only visible to verified women
                  </div>
                </div>
                <div className="tog">
                  <div className="tog-k"></div>
                </div>
              </div>
              <div className="saf-card">
                <div className="saf-ch">
                  <div className="saf-icon">✓</div>
                  <div className="saf-ct">Phone-verified profiles</div>
                </div>
                <div className="saf-cx">Every user verifies via OTP before going live. Fake accounts blocked at signup.</div>
              </div>
              <div className="saf-card">
                <div className="saf-ch">
                  <div className="saf-icon">📍</div>
                  <div className="saf-ct">Timed location sharing</div>
                </div>
                <div className="saf-cx">Share live location for 1 hour before a meetup. Auto-expires. Always your choice.</div>
              </div>
              <div className="saf-card">
                <div className="saf-ch">
                  <div className="saf-icon">🚫</div>
                  <div className="saf-ct">Report & block instantly</div>
                </div>
                <div className="saf-cx">Any user can be reported from chat. Blocked users can never contact you again.</div>
              </div>
              <div className="saf-card" style={{ background: 'var(--p1)', borderColor: 'var(--n3)' }}>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '12px', color: 'var(--p3)', fontWeight: 700, marginBottom: '4px' }}>
                  Meetup tip
                </div>
                <div className="saf-cx" style={{ color: 'var(--p2)' }}>
                  Always meet in a public place first. Tell a friend where you're going and when you'll be back.
                </div>
              </div>
            </div>

            <div className="bnav">
              <div className="ni" onClick={() => go('discover')}>
                <div className="ni-icon">🏠</div>
                <div className="ni-lbl">Home</div>
              </div>
              <div className="ni" onClick={() => go('map')}>
                <div className="ni-icon">🗺️</div>
                <div className="ni-lbl">Map</div>
              </div>
              <div className="ni" onClick={() => go('rooms')}>
                <div className="ni-icon">🏘️</div>
                <div className="ni-lbl">Rooms</div>
              </div>
              <div className="ni" onClick={() => go('chat')}>
                <div className="ni-icon">💬</div>
                <div className="ni-lbl">Chats</div>
              </div>
              <div className="ni" onClick={() => go('profile')}>
                <div className="ni-icon">👤</div>
                <div className="ni-lbl">Profile</div>
              </div>
            </div>
          </div>

          {/* 12. EMPTY */}
          <div className={`screen ${currentScreen === 'empty' ? 'on' : ''}`} id="sc-empty">
            <div className="sb" style={{ background: 'var(--white)' }}>
              <span className="sb-t">9:41</span>
              <div className="sig">
                <div className="b" style={{ height: '4px' }}></div>
                <div className="b" style={{ height: '6px' }}></div>
                <div className="b" style={{ height: '9px' }}></div>
                <div className="b" style={{ height: '12px' }}></div>
              </div>
            </div>
            <div className="disc-sb">
              <div className="logo-txt">Buddy<span>.</span></div>
              <div className="ic-btn">🔔</div>
            </div>
            <div className="empty-body">
              <div className="empty-ring">🗺️</div>
              <div className="empty-t">No buddies nearby yet.</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '13px', color: 'var(--p2)', fontWeight: 600, marginBottom: '6px' }}>
                Be the first explorer here!
              </div>
              <div className="empty-s">
                Enable your location to appear on the map — someone nearby is probably looking for company too.
              </div>
              <button className="btn-p" style={{ maxWidth: '280px' }}>📍 Enable location</button>
              <button className="btn-g" style={{ marginTop: '6px' }}>Share Buddy Finder with friends</button>
              <div className="fallback">
                <div className="fb-t">Meanwhile → Browse Activity Rooms</div>
                <div className="fb-s">Groups forming around food trails, cycling, study sessions and more.</div>
                <button className="btn-o" style={{ fontSize: '12px', padding: '9px' }} onClick={() => go('rooms')}>
                  Browse Rooms
                </button>
              </div>
            </div>

            <div className="bnav">
              <div className="ni on">
                <div className="ni-icon">🏠</div>
                <div className="ni-lbl">Home</div>
              </div>
              <div className="ni" onClick={() => go('map')}>
                <div className="ni-icon">🗺️</div>
                <div className="ni-lbl">Map</div>
              </div>
              <div className="ni" onClick={() => go('rooms')}>
                <div className="ni-icon">🏘️</div>
                <div className="ni-lbl">Rooms</div>
              </div>
              <div className="ni" onClick={() => go('chat')}>
                <div className="ni-icon">💬</div>
                <div className="ni-lbl">Chats</div>
              </div>
              <div className="ni" onClick={() => go('profile')}>
                <div className="ni-icon">👤</div>
                <div className="ni-lbl">Profile</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
