// GCSE AQA Physics - 8 Base Topics with Module Structure
// Forces chapter includes detailed modules from forcesModuleData and energyModuleData

import { forcesModuleData, ForcesModule } from './forcesModuleData';
import { energyModuleData, EnergyModule } from './energyModuleData';
import { energyTransfersModuleData, EnergyTransfersModule } from './energyTransfersModuleData';
import { motionModuleData, MotionModule } from './motionModuleData';

export interface PracticeItem {
  id: string;
  prompt_template: string;
  marks: number;
  type: "open" | "short-answer" | "mcq";
  difficulty: "easy" | "medium" | "hard";
  randomise: boolean;
  expected_keywords: string[];
}

export interface Subsection {
  id: string;
  title: string;
  type: "content" | "practice-group";
  content_html: string;
  canonical_keywords: string[];
  practice_items: PracticeItem[];
  study_group?: number;
}

export interface Module {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
}

export interface TopicSection {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  subsections: Subsection[];
  modules?: Module[];
}

// Convert ForcesModule to Module type
const forcesModule: Module = {
  id: forcesModuleData.id,
  title: forcesModuleData.title,
  status: forcesModuleData.status,
  subsections: forcesModuleData.subsections as Subsection[]
};

// Convert EnergyModule to Module type
const energyModule: Module = {
  id: energyModuleData.id,
  title: energyModuleData.title,
  status: energyModuleData.status,
  subsections: energyModuleData.subsections as Subsection[]
};

// Convert EnergyTransfersModule to Module type
const energyTransfersModule: Module = {
  id: energyTransfersModuleData.id,
  title: energyTransfersModuleData.title,
  status: energyTransfersModuleData.status,
  subsections: energyTransfersModuleData.subsections as Subsection[]
};

// Convert MotionModule to Module type
const motionModule: Module = {
  id: motionModuleData.id,
  title: motionModuleData.title,
  status: motionModuleData.status,
  subsections: motionModuleData.subsections as Subsection[]
};

export const physicsData: TopicSection[] = [
  {
    id: "energy",
    title: "Energy",
    status: "ready",
    subsections: [
      {
        id: "4-1-1-energy-stores-systems",
        title: "4.1.1 Energy Stores and Systems",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Energy Stores</h3>
  <ul>
    <li>Thermal, Kinetic, Gravitational potential, Elastic potential</li>
    <li>Chemical, Magnetic, Electrostatic, Nuclear</li>
  </ul>
</div>
<div class="subsection">
  <h3 class="subsection-heading">Systems and Changes</h3>
  <p>Energy is transferred by heating, waves, electrical work, or mechanical work.</p>
</div>
        `,
        canonical_keywords: ["energy stores","thermal","kinetic","gpe","elastic","chemical","magnetic","electrostatic","nuclear","systems","energy transfer"],
        practice_items: [
          { id:"p1", prompt_template:"List four energy stores and give one example for any store.", marks:3, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["thermal","kinetic","gravitational potential","elastic","chemical","magnetic","electrostatic","nuclear","example"]},
          { id:"p2", prompt_template:"Name two pathways by which energy can be transferred and describe a simple example.", marks:3, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["heating","mechanical work","electrical work","waves","transfer"]}
        ]
      },
      {
        id: "4-1-2-work-and-energy-calculations",
        title: "4.1.2 Changes in Energy and Work Done",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Key Equations</h3>
  <ul>
    <li>Work done: W = F s</li>
    <li>Kinetic: E_k = 1/2 m v^2</li>
    <li>Gravitational: E_p = m g h</li>
  </ul>
</div>
        `,
        canonical_keywords:["work done","W=Fs","kinetic energy","1/2 m v^2","gravitational potential","mgh","energy change"],
        practice_items:[
          { id:"p3", prompt_template:"A 10 N force moves a box 3 m. Calculate the work done.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["W=Fs","30 J"]},
          { id:"p4", prompt_template:"A 0.5 kg ball moves at 6 m/s. Calculate its kinetic energy.", marks:3, type:"short-answer", difficulty:"medium", randomise:true, expected_keywords:["Ek=1/2mv^2","9 J","0.5*36=18*0.5=9"]}
        ]
      }
    ]
  },
  {
    id: "electricity",
    title: "Electricity",
    status: "ready",
    subsections: [
      {
        id: "4-2-1-current-vpd-resistance",
        title: "4.2.1 Current, Potential Difference and Resistance",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Key Ideas</h3>
  <ul>
    <li>Current (I) is the rate of flow of charge. Unit: ampere (A)</li>
    <li>Potential difference (V) is energy transferred per unit charge. Unit: volt (V)</li>
    <li>Resistance (R) opposes current. Ohm's law: V = I R</li>
  </ul>
</div>
        `,
        canonical_keywords:["current","charge","potential difference","voltage","resistance","Ohm's law","V=IR"],
        practice_items:[
          { id:"p1", prompt_template:"Define current and potential difference, including their units.", marks:3, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["current","rate of flow of charge","ampere","potential difference","energy per charge","volt"]},
          { id:"p2", prompt_template:"A component has resistance 20 Ω and current 0.4 A. Calculate the potential difference across it.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["V=IR","8 V"]}
        ]
      },
      {
        id: "4-2-2-series-parallel",
        title: "4.2.2 Series and Parallel Circuits",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Rules</h3>
  <ul>
    <li>Series: current same everywhere; potential differences add; total R = R1 + R2 …</li>
    <li>Parallel: potential difference same across branches; currents add; 1/R_total = 1/R1 + 1/R2 …</li>
  </ul>
</div>
        `,
        canonical_keywords:["series","parallel","current","potential difference","resistance","circuit rules"],
        practice_items:[
          { id:"p3", prompt_template:"In a series circuit, how do current and potential difference behave?", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["current same","potential differences add"]},
          { id:"p4", prompt_template:"Two 6 Ω resistors in parallel give what total resistance?", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["3 Ω","parallel formula"]}
        ]
      }
    ]
  },
  {
    id: "particle-model",
    title: "Particle Model of Matter",
    status: "ready",
    subsections: [
      {
        id: "4-3-1-density",
        title: "4.3.1 Density of Materials",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Density</h3>
  <p>Density ρ = m / V. Typical units kg/m³. Measure mass with a balance and volume by geometry or displacement.</p>
</div>
        `,
        canonical_keywords:["density","rho","mass","volume","kg/m^3","displacement"],
        practice_items:[
          { id:"p1", prompt_template:"A block has mass 0.8 kg and volume 4×10^-4 m³. Calculate its density.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["ρ=m/V","2000 kg/m^3"]}
        ]
      },
      {
        id: "4-3-2-changes-of-state-internal-energy",
        title: "4.3.2 Changes of State and Internal Energy",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Internal Energy</h3>
  <p>Internal energy is the sum of the kinetic and potential energies of particles. Heating changes temperature or state.</p>
  <p>Specific latent heat L: energy to change state of 1 kg without temperature change.</p>
</div>
        `,
        canonical_keywords:["internal energy","specific latent heat","change of state","temperature","particle model"],
        practice_items:[
          { id:"p2", prompt_template:"Explain what is meant by specific latent heat.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["energy","1 kg","change of state","no temperature change"]}
        ]
      }
    ]
  },
  {
    id: "atomic-structure",
    title: "Atomic Structure",
    status: "ready",
    subsections: [
      {
        id: "4-4-1-atom-and-isotopes",
        title: "4.4.1 Atoms and Isotopes",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Structure</h3>
  <p>Atoms have a nucleus of protons and neutrons with electrons in shells. Isotopes are atoms of the same element with different numbers of neutrons.</p>
</div>
        `,
        canonical_keywords:["proton","neutron","electron","nucleus","isotopes"],
        practice_items:[
          { id:"p1", prompt_template:"Define an isotope and give one example.", marks:3, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["same element","different neutrons","example"]}
        ]
      },
      {
        id: "4-4-2-radioactivity-half-life",
        title: "4.4.2 Radioactive Decay and Half-life",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Key Ideas</h3>
  <p>Alpha, beta and gamma radiation; random and spontaneous decay; half-life is the time for activity to halve.</p>
</div>
        `,
        canonical_keywords:["alpha","beta","gamma","radioactive","decay","half-life","activity"],
        practice_items:[
          { id:"p2", prompt_template:"Explain what is meant by the half-life of a radioactive isotope.", marks:2, type:"short-answer", difficulty:"easy", randomise:true, expected_keywords:["time","activity halves","nuclei","decay"]}
        ]
      }
    ]
  },
  {
    id: "forces",
    title: "Forces",
    status: "ready",
    subsections: [], // No direct subsections - all content is in modules
    modules: [forcesModule, energyModule, energyTransfersModule, motionModule]
  },
  {
    id: "waves",
    title: "Waves",
    status: "ready",
    subsections: [
      {
        id: "4-6-1-1-transverse-longitudinal",
        title: "4.6.1.1 – Transverse and Longitudinal Waves",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Types of Waves</h3>
  
  <div class="definition-block">
    <h4>🌊 Definition:</h4>
    <p>Waves transfer energy, not matter. The particles in the medium vibrate to pass energy along, but they do not move with the wave.</p>
    <p>There are two main types of waves:</p>
    <ul>
      <li>1️⃣ Transverse waves</li>
      <li>2️⃣ Longitudinal waves</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🧠 Key Idea:</h4>
    <p>In both types, the wave moves energy from one place to another — but the particle vibrations happen in different directions.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Transverse Waves</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>In a transverse wave, the vibrations of the particles are at right angles (⟂) to the direction the wave travels.</p>
  </div>

  <div class="key-facts-block">
    <h4>💠 Key Features:</h4>
    <ul>
      <li>Particles move up and down as the wave moves side to side.</li>
      <li>Have crests (peaks) and troughs.</li>
      <li>Can travel through solids and on the surface of liquids, but not through gases.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>🌊 Ripples on a water surface are transverse waves. The water particles move up and down, but the wave itself travels outward across the surface.</p>
  </div>

  <!-- Animated Transverse Wave Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌊 Transverse Wave (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="360" height="160" viewBox="0 0 360 160">
        <!-- Wave path -->
        <path d="M20 80 Q50 30, 80 80 T140 80 T200 80 T260 80 T320 80 T380 80" 
              fill="none" stroke="#3b82f6" stroke-width="3" class="anim-wave"/>
        
        <!-- Crest and trough labels -->
        <text x="50" y="25" fill="#22c55e" font-size="10" text-anchor="middle">Crest</text>
        <line x1="50" y1="30" x2="50" y2="50" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2"/>
        
        <text x="110" y="145" fill="#ef4444" font-size="10" text-anchor="middle">Trough</text>
        <line x1="110" y1="110" x2="110" y2="135" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2"/>
        
        <!-- Amplitude marker -->
        <line x1="50" y1="50" x2="50" y2="80" stroke="#f59e0b" stroke-width="2"/>
        <line x1="45" y1="50" x2="55" y2="50" stroke="#f59e0b" stroke-width="2"/>
        <line x1="45" y1="80" x2="55" y2="80" stroke="#f59e0b" stroke-width="2"/>
        <text x="70" y="68" fill="#f59e0b" font-size="9">Amplitude</text>
        
        <!-- Wavelength marker -->
        <line x1="50" y1="95" x2="170" y2="95" stroke="#ec4899" stroke-width="2"/>
        <line x1="50" y1="90" x2="50" y2="100" stroke="#ec4899" stroke-width="2"/>
        <line x1="170" y1="90" x2="170" y2="100" stroke="#ec4899" stroke-width="2"/>
        <text x="110" y="108" fill="#ec4899" font-size="9" text-anchor="middle">Wavelength (λ)</text>
        
        <!-- Direction arrows -->
        <path d="M280 80 L320 80" stroke="currentColor" stroke-width="2" marker-end="url(#arrowWave)"/>
        <text x="300" y="70" fill="currentColor" font-size="9" text-anchor="middle">Wave direction →</text>
        
        <!-- Particle motion indicator -->
        <line x1="200" y1="50" x2="200" y2="110" stroke="#6366f1" stroke-width="1" stroke-dasharray="3,2"/>
        <path d="M200 55 L195 65 M200 55 L205 65" stroke="#6366f1" stroke-width="2"/>
        <path d="M200 105 L195 95 M200 105 L205 95" stroke="#6366f1" stroke-width="2"/>
        <text x="235" y="60" fill="#6366f1" font-size="8">Particle</text>
        <text x="235" y="70" fill="#6366f1" font-size="8">motion ↕</text>
        
        <defs>
          <marker id="arrowWave" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Particles vibrate perpendicular (⟂) to wave direction • Examples: water waves, light, electromagnetic waves</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Longitudinal Waves</h3>
  
  <div class="definition-block">
    <h4>📗 Definition:</h4>
    <p>In a longitudinal wave, the vibrations of the particles are parallel (∥) to the direction the wave travels.</p>
  </div>

  <div class="key-facts-block">
    <h4>💠 Key Features:</h4>
    <ul>
      <li>The wave has compressions (where particles are close together) and rarefactions (where they are spread apart).</li>
      <li>Can travel through solids, liquids, and gases, but not through a vacuum because they need particles to pass energy on.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>🔊 Sound waves in air are longitudinal. The air particles vibrate backwards and forwards in the same direction the sound travels.</p>
  </div>

  <!-- Animated Longitudinal Wave Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔊 Longitudinal Wave (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="360" height="140" viewBox="0 0 360 140">
        <!-- Particle representation -->
        <g>
          <!-- Compression zone -->
          <g class="anim-oscillate-x">
            <circle cx="40" cy="70" r="5" fill="#3b82f6"/>
            <circle cx="52" cy="70" r="5" fill="#3b82f6"/>
            <circle cx="64" cy="70" r="5" fill="#3b82f6"/>
            <circle cx="76" cy="70" r="5" fill="#3b82f6"/>
          </g>
          
          <!-- Rarefaction zone -->
          <g class="anim-oscillate-x" style="animation-delay: 0.5s;">
            <circle cx="100" cy="70" r="5" fill="#3b82f6" opacity="0.6"/>
            <circle cx="130" cy="70" r="5" fill="#3b82f6" opacity="0.6"/>
            <circle cx="160" cy="70" r="5" fill="#3b82f6" opacity="0.6"/>
          </g>
          
          <!-- Compression zone 2 -->
          <g class="anim-oscillate-x">
            <circle cx="185" cy="70" r="5" fill="#3b82f6"/>
            <circle cx="197" cy="70" r="5" fill="#3b82f6"/>
            <circle cx="209" cy="70" r="5" fill="#3b82f6"/>
            <circle cx="221" cy="70" r="5" fill="#3b82f6"/>
          </g>
          
          <!-- Rarefaction zone 2 -->
          <g class="anim-oscillate-x" style="animation-delay: 0.5s;">
            <circle cx="245" cy="70" r="5" fill="#3b82f6" opacity="0.6"/>
            <circle cx="275" cy="70" r="5" fill="#3b82f6" opacity="0.6"/>
            <circle cx="305" cy="70" r="5" fill="#3b82f6" opacity="0.6"/>
          </g>
        </g>
        
        <!-- Labels -->
        <text x="58" y="45" fill="#22c55e" font-size="10" text-anchor="middle" font-weight="bold">Compression</text>
        <text x="58" y="55" fill="#22c55e" font-size="8" text-anchor="middle">(particles close)</text>
        
        <text x="130" y="105" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">Rarefaction</text>
        <text x="130" y="115" fill="#ef4444" font-size="8" text-anchor="middle">(particles spread)</text>
        
        <!-- Wavelength marker -->
        <line x1="40" y1="20" x2="185" y2="20" stroke="#ec4899" stroke-width="2"/>
        <line x1="40" y1="15" x2="40" y2="25" stroke="#ec4899" stroke-width="2"/>
        <line x1="185" y1="15" x2="185" y2="25" stroke="#ec4899" stroke-width="2"/>
        <text x="112" y="15" fill="#ec4899" font-size="9" text-anchor="middle">Wavelength (λ)</text>
        
        <!-- Direction arrows -->
        <path d="M320 70 L345 70" stroke="currentColor" stroke-width="2" marker-end="url(#arrowLong)"/>
        <text x="332" y="60" fill="currentColor" font-size="8" text-anchor="middle">Wave →</text>
        
        <!-- Particle motion indicator -->
        <path d="M320 95 L340 95" stroke="#6366f1" stroke-width="2"/>
        <path d="M335 90 L340 95 L335 100" stroke="#6366f1" stroke-width="2" fill="none"/>
        <path d="M320 95 L315 90 M320 95 L315 100" stroke="#6366f1" stroke-width="2"/>
        <text x="330" y="125" fill="#6366f1" font-size="8" text-anchor="middle">Particle ↔</text>
        
        <defs>
          <marker id="arrowLong" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.8rem; color: var(--muted-foreground);">Particles vibrate parallel (∥) to wave direction • Examples: sound waves, ultrasound, P-waves (earthquakes)</p>
  </div>
</div>
        `,
        canonical_keywords: [
          "waves", "energy transfer", "transverse", "longitudinal", "vibrations", "particles",
          "crest", "trough", "compression", "rarefaction", "right angles", "parallel", "medium"
        ],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Define what a wave is and explain what waves transfer.",
            marks: 3,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["wave", "transfer", "energy", "not matter", "vibrations", "particles"]
          },
          {
            id: "p2",
            prompt_template: "State the definition of a transverse wave and give one example.",
            marks: 4,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["transverse", "vibrations", "right angles", "perpendicular", "water", "ripples"]
          },
          {
            id: "p3",
            prompt_template: "Explain the difference between transverse and longitudinal waves.",
            marks: 4,
            type: "short-answer",
            difficulty: "medium",
            randomise: true,
            expected_keywords: ["transverse", "longitudinal", "right angles", "parallel", "compression", "rarefaction"]
          }
        ]
      },
      {
        id: "4-6-1-2-wave-properties",
        title: "4.6.1.2 – Wave Properties",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Wave Properties</h3>
  <ul>
    <li>Amplitude: maximum displacement from rest position</li>
    <li>Wavelength (λ): distance from one point to the same point on the next wave</li>
    <li>Frequency (f): number of waves per second (Hz)</li>
    <li>Period (T): time for one complete wave (T = 1/f)</li>
  </ul>
  <p><strong>Wave equation:</strong> v = f × λ</p>
</div>
        `,
        canonical_keywords: ["amplitude", "wavelength", "frequency", "period", "wave speed", "v=fλ"],
        practice_items: [
          {
            id: "p1",
            prompt_template: "A wave has frequency 50 Hz and wavelength 2 m. Calculate the wave speed.",
            marks: 2,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["v=fλ", "100 m/s"]
          }
        ]
      }
    ]
  },
  {
    id: "magnetism",
    title: "Magnetism and Electromagnetism",
    status: "ready",
    subsections: [
      {
        id: "4-7-1-permanent-induced-magnets",
        title: "4.7.1 Permanent and Induced Magnets",
        type: "content",
        study_group: 1,
        content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Magnets</h3>
  <ul>
    <li>Permanent magnets: produce their own magnetic field</li>
    <li>Induced magnets: become magnetic when in a magnetic field</li>
    <li>Like poles repel, unlike poles attract</li>
  </ul>
</div>
        `,
        canonical_keywords: ["permanent magnet", "induced magnet", "magnetic field", "poles", "attract", "repel"],
        practice_items: [
          {
            id: "p1",
            prompt_template: "Explain the difference between a permanent and an induced magnet.",
            marks: 3,
            type: "short-answer",
            difficulty: "easy",
            randomise: true,
            expected_keywords: ["permanent", "own field", "induced", "only magnetic in field"]
          }
        ]
      }
    ]
  },
  {
    id: "space",
    title: "Space Physics",
    status: "coming_soon",
    subsections: []
  }
];
