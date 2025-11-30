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
    subsections: [],
    modules: [energyTransfersModule]
  },
  {
    id: "electricity",
    title: "Electricity",
    status: "coming_soon",
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
    status: "coming_soon",
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
    status: "coming_soon",
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
    modules: [forcesModule, energyModule, motionModule]
  },
{
    id: "waves",
    title: "Waves",
    status: "ready",
    modules: [
      {
        id: "waves-module-1",
        title: "Module 1: Wave Properties & Behaviour",
        subsections: [
          {
            id: "4-6-1-1-transverse-longitudinal",
            title: "4.6.1.1 – Transverse and Longitudinal Waves",
            type: "content",
            study_group: 1,
            content_html: \`
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Waves Transfer Energy</h3>
  
  <div class="definition-block">
    <h4>🌊 Definition:</h4>
    <p>Waves transfer <strong>energy</strong> from one place to another <strong>without transferring matter</strong>.</p>
    <p>There are two types of mechanical wave motion:</p>
    <ul>
      <li>Transverse waves</li>
      <li>Longitudinal waves</li>
    </ul>
    <p>These are classified by how the particles vibrate relative to the direction the wave moves.</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Transverse Waves</h3>
  
  <div class="definition-block">
    <h4>📘 Definition:</h4>
    <p>In a transverse wave, the oscillations/vibrations of particles are <strong>perpendicular (at right angles)</strong> to the direction that the wave travels.</p>
  </div>

  <div class="key-facts-block">
    <h4>💠 Key Features:</h4>
    <ul>
      <li>Wave moves horizontally</li>
      <li>Particles move up and down</li>
      <li>Produces crests (peaks) and troughs</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>🌊 Ripples on a water surface are transverse waves.</p>
  </div>

  <!-- Animated Transverse Wave Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌊 Transverse Wave (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="180" viewBox="0 0 400 180">
        <!-- Wave path with animation -->
        <path d="M20 90 Q55 30, 90 90 T160 90 T230 90 T300 90 T370 90" 
              fill="none" stroke="#3b82f6" stroke-width="3" class="anim-wave"/>
        
        <!-- Crest and trough labels -->
        <text x="55" y="25" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Crest</text>
        <line x1="55" y1="30" x2="55" y2="50" stroke="#22c55e" stroke-width="1" stroke-dasharray="2,2"/>
        
        <text x="125" y="165" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Trough</text>
        <line x1="125" y1="130" x2="125" y2="155" stroke="#ef4444" stroke-width="1" stroke-dasharray="2,2"/>
        
        <!-- Amplitude marker -->
        <line x1="55" y1="50" x2="55" y2="90" stroke="#f59e0b" stroke-width="2"/>
        <line x1="50" y1="50" x2="60" y2="50" stroke="#f59e0b" stroke-width="2"/>
        <line x1="50" y1="90" x2="60" y2="90" stroke="#f59e0b" stroke-width="2"/>
        <text x="78" y="75" fill="#f59e0b" font-size="10" font-weight="bold">A</text>
        
        <!-- Wavelength marker -->
        <line x1="55" y1="105" x2="195" y2="105" stroke="#ec4899" stroke-width="2"/>
        <line x1="55" y1="100" x2="55" y2="110" stroke="#ec4899" stroke-width="2"/>
        <line x1="195" y1="100" x2="195" y2="110" stroke="#ec4899" stroke-width="2"/>
        <text x="125" y="120" fill="#ec4899" font-size="10" text-anchor="middle" font-weight="bold">Wavelength (λ)</text>
        
        <!-- Rest position -->
        <line x1="20" y1="90" x2="380" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        <text x="385" y="93" fill="currentColor" font-size="8">Rest</text>
        
        <!-- Direction arrows -->
        <path d="M310 60 L350 60" stroke="currentColor" stroke-width="2" marker-end="url(#arrowWave)"/>
        <text x="330" y="50" fill="currentColor" font-size="9" text-anchor="middle">Wave direction →</text>
        
        <!-- Particle motion indicator -->
        <line x1="20" y1="50" x2="20" y2="130" stroke="#6366f1" stroke-width="1" stroke-dasharray="3,2"/>
        <path d="M20 55 L15 65 M20 55 L25 65" stroke="#6366f1" stroke-width="2"/>
        <path d="M20 125 L15 115 M20 125 L25 115" stroke="#6366f1" stroke-width="2"/>
        <text x="35" y="145" fill="#6366f1" font-size="8">Particle ↕</text>
        
        <defs>
          <marker id="arrowWave" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Particles vibrate <strong>perpendicular (⟂)</strong> to wave direction • Examples: water ripples, light waves, S-waves</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td>Particle motion</td><td>Perpendicular to wave direction</td></tr>
      <tr><td>Wave shape</td><td>Peaks and troughs</td></tr>
      <tr><td>Media</td><td>Solids, on surfaces of liquids; EM waves can travel in vacuum</td></tr>
      <tr><td>Examples</td><td>Water ripples, light waves, waves on a rope, S-waves</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Longitudinal Waves</h3>
  
  <div class="definition-block">
    <h4>📗 Definition:</h4>
    <p>In a longitudinal wave, the oscillations are <strong>parallel</strong> to the direction the wave travels.</p>
  </div>

  <div class="key-facts-block">
    <h4>💠 Key Features:</h4>
    <ul>
      <li>The wave has <strong>compressions</strong> (where particles are close together) and <strong>rarefactions</strong> (where they are spread apart).</li>
      <li>Can travel through solids, liquids, and gases, but not through a vacuum.</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>🔊 Sound waves in air are longitudinal.</p>
  </div>

  <!-- Animated Longitudinal Wave Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔊 Longitudinal Wave (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="160" viewBox="0 0 400 160">
        <!-- Particle representation -->
        <g>
          <!-- Compression zone 1 -->
          <g class="anim-oscillate-x">
            <circle cx="40" cy="80" r="6" fill="#3b82f6"/>
            <circle cx="54" cy="80" r="6" fill="#3b82f6"/>
            <circle cx="68" cy="80" r="6" fill="#3b82f6"/>
            <circle cx="82" cy="80" r="6" fill="#3b82f6"/>
          </g>
          
          <!-- Rarefaction zone 1 -->
          <g class="anim-oscillate-x" style="animation-delay: 0.5s;">
            <circle cx="110" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
            <circle cx="145" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
            <circle cx="180" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          </g>
          
          <!-- Compression zone 2 -->
          <g class="anim-oscillate-x">
            <circle cx="210" cy="80" r="6" fill="#3b82f6"/>
            <circle cx="224" cy="80" r="6" fill="#3b82f6"/>
            <circle cx="238" cy="80" r="6" fill="#3b82f6"/>
            <circle cx="252" cy="80" r="6" fill="#3b82f6"/>
          </g>
          
          <!-- Rarefaction zone 2 -->
          <g class="anim-oscillate-x" style="animation-delay: 0.5s;">
            <circle cx="280" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
            <circle cx="315" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
            <circle cx="350" cy="80" r="6" fill="#3b82f6" opacity="0.5"/>
          </g>
        </g>
        
        <!-- Labels -->
        <text x="61" y="45" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Compression</text>
        <text x="61" y="57" fill="#22c55e" font-size="9" text-anchor="middle">(particles close)</text>
        
        <text x="145" y="120" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Rarefaction</text>
        <text x="145" y="132" fill="#ef4444" font-size="9" text-anchor="middle">(particles spread)</text>
        
        <!-- Wavelength marker -->
        <line x1="40" y1="20" x2="210" y2="20" stroke="#ec4899" stroke-width="2"/>
        <line x1="40" y1="15" x2="40" y2="25" stroke="#ec4899" stroke-width="2"/>
        <line x1="210" y1="15" x2="210" y2="25" stroke="#ec4899" stroke-width="2"/>
        <text x="125" y="14" fill="#ec4899" font-size="10" text-anchor="middle" font-weight="bold">Wavelength (λ)</text>
        
        <!-- Direction arrows -->
        <path d="M360 50 L385 50" stroke="currentColor" stroke-width="2" marker-end="url(#arrowLong)"/>
        <text x="372" y="42" fill="currentColor" font-size="8" text-anchor="middle">Wave →</text>
        
        <!-- Particle motion indicator -->
        <path d="M360 105 L385 105" stroke="#6366f1" stroke-width="2"/>
        <path d="M380 100 L385 105 L380 110" stroke="#6366f1" stroke-width="2" fill="none"/>
        <path d="M360 105 L355 100 M360 105 L355 110" stroke="#6366f1" stroke-width="2"/>
        <text x="372" y="145" fill="#6366f1" font-size="8" text-anchor="middle">Particle ↔</text>
        
        <defs>
          <marker id="arrowLong" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.85rem; color: var(--muted-foreground);">Particles vibrate <strong>parallel (∥)</strong> to wave direction • Examples: sound waves, ultrasound, P-waves</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Description</th></tr></thead>
    <tbody>
      <tr><td>Particle motion</td><td>Parallel to wave direction</td></tr>
      <tr><td>Wave shape</td><td>Compressions and rarefactions</td></tr>
      <tr><td>Media</td><td>Solids, liquids, gases (cannot travel in vacuum)</td></tr>
      <tr><td>Examples</td><td>Sound waves, P-waves, slinky pushed/pulled</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Comparison Table</h3>
  
  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Feature</th><th>Transverse</th><th>Longitudinal</th></tr></thead>
    <tbody>
      <tr><td>Direction of oscillations</td><td>Perpendicular to direction of travel</td><td>Parallel to direction of travel</td></tr>
      <tr><td>Appearance</td><td>Peaks + troughs</td><td>Compressions + rarefactions</td></tr>
      <tr><td>Travels through</td><td>Solids, liquid surfaces, EM waves</td><td>Solids, liquids, gases</td></tr>
      <tr><td>Example</td><td>Water ripples</td><td>Sound waves</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 5 – Evidence That Waves Transfer Energy, Not Matter</h3>
  
  <div class="key-facts-block">
    <h4>🌊 Water Surface Evidence:</h4>
    <ul>
      <li>Float a small object (e.g., cork) on water</li>
      <li>When waves pass, the cork moves up and down only—it does NOT travel with the wave</li>
      <li>This shows the water stays in place, while the wave pattern moves</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🔊 Sound in Air Evidence:</h4>
    <ul>
      <li>When someone speaks, air molecules do not flow across a room</li>
      <li>Instead, regions of high and low pressure move through the air</li>
      <li>The air itself simply vibrates, staying in roughly the same place</li>
      <li>Energy travels, not matter</li>
    </ul>
  </div>

  <!-- Cork on Water Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Cork on Water Experiment (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="150" viewBox="0 0 400 150">
        <!-- Wave -->
        <path d="M20 80 Q50 50, 80 80 T140 80 T200 80 T260 80 T320 80 T380 80" 
              fill="none" stroke="#3b82f6" stroke-width="3" class="anim-wave"/>
        
        <!-- Cork -->
        <g class="anim-bounce-small">
          <rect x="115" y="55" width="20" height="15" rx="3" fill="#f59e0b"/>
          <text x="125" y="45" fill="#f59e0b" font-size="9" text-anchor="middle">Cork</text>
        </g>
        
        <!-- Vertical arrows showing cork motion -->
        <g>
          <line x1="150" y1="45" x2="150" y2="95" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,2"/>
          <path d="M150 48 L145 58 M150 48 L155 58" stroke="#22c55e" stroke-width="2"/>
          <path d="M150 92 L145 82 M150 92 L155 82" stroke="#22c55e" stroke-width="2"/>
          <text x="170" y="70" fill="#22c55e" font-size="9">↕ up/down</text>
          <text x="170" y="82" fill="#22c55e" font-size="8">only</text>
        </g>
        
        <!-- Wave direction -->
        <path d="M280 40 L340 40" stroke="currentColor" stroke-width="2" marker-end="url(#arrowCork)"/>
        <text x="310" y="32" fill="currentColor" font-size="9" text-anchor="middle">Wave travels →</text>
        
        <!-- Conclusion -->
        <text x="200" y="130" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">✓ Energy moves, NOT matter</text>
        
        <defs>
          <marker id="arrowCork" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Wave Type</th><th>What Particles Do</th><th>What Moves</th></tr></thead>
    <tbody>
      <tr><td>Water ripples</td><td>Move up/down</td><td>Wavefront travels</td></tr>
      <tr><td>Sound in air</td><td>Vibrate back/forth</td><td>Compression wave travels</td></tr>
    </tbody>
  </table>
</div>
            \`,
            canonical_keywords: [
              "waves", "energy transfer", "transverse", "longitudinal", "vibrations", "particles",
              "crest", "trough", "compression", "rarefaction", "perpendicular", "parallel", "medium"
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
                expected_keywords: ["transverse", "longitudinal", "perpendicular", "parallel", "compression", "rarefaction"]
              },
              {
                id: "p4",
                prompt_template: "Describe an experiment that shows it is the wave, not the matter, that travels.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["cork", "float", "up and down", "wave travels", "energy", "not matter"]
              }
            ]
          },
          {
            id: "4-6-1-2-wave-properties",
            title: "4.6.1.2 – Properties of Waves",
            type: "content",
            study_group: 1,
            content_html: \`
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Wave Properties (Amplitude, Wavelength, Frequency, Period)</h3>
  
  <div class="definition-block">
    <h4>📊 Amplitude (A):</h4>
    <p>Maximum displacement of a point on a wave from its undisturbed/rest position. Measures how "strong" or "loud" the wave is.</p>
  </div>

  <div class="definition-block">
    <h4>📊 Wavelength (λ):</h4>
    <p>The distance between repeating points: crest to crest, trough to trough, or compression to compression. Measured in metres (m).</p>
  </div>

  <div class="definition-block">
    <h4>📊 Frequency (f):</h4>
    <p>Number of complete waves per second. Measured in hertz (Hz). E.g., 100 Hz = 100 waves every second.</p>
  </div>

  <div class="definition-block">
    <h4>📊 Period (T):</h4>
    <p>Time taken for one complete cycle of a wave. T = 1/f</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Quantity</th><th>Symbol</th><th>Unit</th><th>What It Means</th></tr></thead>
    <tbody>
      <tr><td>Amplitude</td><td>A</td><td>m</td><td>Height from rest to crest</td></tr>
      <tr><td>Wavelength</td><td>λ</td><td>m</td><td>Distance between repeating points</td></tr>
      <tr><td>Frequency</td><td>f</td><td>Hz</td><td>Waves per second</td></tr>
      <tr><td>Period</td><td>T</td><td>s</td><td>Time for one wave</td></tr>
    </tbody>
  </table>

  <!-- Wave Properties Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Wave Properties Diagram</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="420" height="200" viewBox="0 0 420 200">
        <!-- Grid lines -->
        <line x1="40" y1="100" x2="400" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Wave -->
        <path d="M40 100 Q70 40, 100 100 T160 100 T220 100 T280 100 T340 100 T400 100" 
              fill="none" stroke="#3b82f6" stroke-width="3"/>
        
        <!-- Amplitude measurement -->
        <line x1="70" y1="40" x2="70" y2="100" stroke="#f59e0b" stroke-width="3"/>
        <line x1="62" y1="40" x2="78" y2="40" stroke="#f59e0b" stroke-width="3"/>
        <line x1="62" y1="100" x2="78" y2="100" stroke="#f59e0b" stroke-width="3"/>
        <rect x="75" y="60" width="65" height="20" fill="var(--background)" rx="3"/>
        <text x="108" y="74" fill="#f59e0b" font-size="12" text-anchor="middle" font-weight="bold">Amplitude</text>
        
        <!-- Wavelength measurement -->
        <line x1="100" y1="175" x2="220" y2="175" stroke="#ec4899" stroke-width="3"/>
        <line x1="100" y1="168" x2="100" y2="182" stroke="#ec4899" stroke-width="3"/>
        <line x1="220" y1="168" x2="220" y2="182" stroke="#ec4899" stroke-width="3"/>
        <rect x="125" y="155" width="70" height="16" fill="var(--background)" rx="3"/>
        <text x="160" y="167" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">Wavelength (λ)</text>
        
        <!-- Labels -->
        <text x="70" y="28" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Crest</text>
        <text x="130" y="180" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Trough</text>
        <text x="405" y="103" fill="currentColor" font-size="9">Rest position</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Wave Speed Equation</h3>
  
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4 style="margin-bottom: 0.5rem;">📐 Wave Equation:</h4>
    <p style="font-size: 1.8rem; font-weight: bold; color: hsl(var(--primary));">v = f × λ</p>
    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Wave speed (m/s) = Frequency (Hz) × Wavelength (m)</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Variable</th><th>Symbol</th><th>Unit</th><th>Meaning</th></tr></thead>
    <tbody>
      <tr><td>Wave speed</td><td>v</td><td>m/s</td><td>Speed of the wave</td></tr>
      <tr><td>Frequency</td><td>f</td><td>Hz</td><td>Waves per second</td></tr>
      <tr><td>Wavelength</td><td>λ</td><td>m</td><td>Length of one wave</td></tr>
    </tbody>
  </table>

  <div class="key-facts-block">
    <h4>🧠 Key Relationships:</h4>
    <ul>
      <li>If frequency ↑ and wavelength stays constant → wave speed increases</li>
      <li>If wavelength ↓ and frequency stays constant → wave speed decreases</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Identifying Amplitude & Wavelength from Diagrams</h3>
  
  <div class="key-facts-block">
    <h4>📏 How to identify amplitude:</h4>
    <ul>
      <li>Draw a vertical line from rest position → crest</li>
      <li>Measure that height</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>📏 How to identify wavelength:</h4>
    <ul>
      <li>Select identical points on two waves</li>
      <li>Measure horizontal distance between them</li>
    </ul>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Feature</th><th>How to Recognise It</th></tr></thead>
    <tbody>
      <tr><td>Amplitude</td><td>Vertical height from rest line</td></tr>
      <tr><td>Wavelength</td><td>Horizontal distance between repeated points</td></tr>
      <tr><td>Crest</td><td>Highest point</td></tr>
      <tr><td>Trough</td><td>Lowest point</td></tr>
      <tr><td>Compression</td><td>Tightly packed lines</td></tr>
      <tr><td>Rarefaction</td><td>Widely spaced lines</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Measuring Speed of Sound in Air</h3>
  
  <div class="key-facts-block">
    <h4>🔬 Method (Standard School Method):</h4>
    <ol>
      <li>Two students stand 30–50 m apart</li>
      <li>Student A claps wooden blocks together</li>
      <li>Student B uses a stopwatch: Start when they see the clap, Stop when they hear the sound</li>
      <li>Repeat 3–5 times and average the time</li>
      <li>Use: v = d/t</li>
    </ol>
  </div>

  <!-- Speed of Sound Experiment Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Speed of Sound Experiment</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="120" viewBox="0 0 400 120">
        <!-- Student A -->
        <circle cx="60" cy="50" r="15" fill="#3b82f6"/>
        <text x="60" y="55" fill="white" font-size="10" text-anchor="middle">A</text>
        <text x="60" y="85" fill="currentColor" font-size="9" text-anchor="middle">Clapper</text>
        
        <!-- Student B -->
        <circle cx="340" cy="50" r="15" fill="#22c55e"/>
        <text x="340" y="55" fill="white" font-size="10" text-anchor="middle">B</text>
        <text x="340" y="85" fill="currentColor" font-size="9" text-anchor="middle">Timer</text>
        
        <!-- Distance arrow -->
        <line x1="85" y1="50" x2="315" y2="50" stroke="#ec4899" stroke-width="2"/>
        <line x1="85" y1="45" x2="85" y2="55" stroke="#ec4899" stroke-width="2"/>
        <line x1="315" y1="45" x2="315" y2="55" stroke="#ec4899" stroke-width="2"/>
        <text x="200" y="42" fill="#ec4899" font-size="11" text-anchor="middle" font-weight="bold">30-50 m</text>
        
        <!-- Sound waves -->
        <g class="anim-flow-right" opacity="0.6">
          <path d="M90 50 Q120 35, 150 50 T210 50 T270 50" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,5"/>
        </g>
        
        <!-- Formula -->
        <text x="200" y="110" fill="currentColor" font-size="12" text-anchor="middle" font-weight="bold">v = d ÷ t</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>⚠️ Common Sources of Error:</h4>
    <ul>
      <li>Reaction time delay</li>
      <li>Wind affecting sound travel</li>
      <li>Timing too short (distance too small)</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>✅ Improvements:</h4>
    <ul>
      <li>Use larger distances to reduce timing errors</li>
      <li>Use electronic timers or data loggers</li>
      <li>Avoid windy or noisy environments</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 5 – Required Practical: Ripple Tank</h3>
  
  <div class="key-facts-block">
    <h4>🔬 Equipment Needed:</h4>
    <table class="data-table" style="margin: 0.5rem 0;">
      <thead><tr><th>Equipment</th><th>Purpose</th></tr></thead>
      <tbody>
        <tr><td>Ripple tank</td><td>Holds water and allows waves to form</td></tr>
        <tr><td>Oscillating bar / motor</td><td>Produces consistent waves</td></tr>
        <tr><td>Lamp above tank</td><td>Casts wave pattern onto screen</td></tr>
        <tr><td>Screen/paper beneath</td><td>Allows wavelengths to be measured</td></tr>
        <tr><td>Ruler</td><td>To measure distances</td></tr>
        <tr><td>Stopwatch</td><td>To measure frequency or time</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Ripple Tank Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔬 Ripple Tank Setup</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="200" viewBox="0 0 380 200">
        <!-- Lamp -->
        <ellipse cx="190" cy="20" rx="30" ry="10" fill="#fbbf24"/>
        <text x="190" y="10" fill="currentColor" font-size="9" text-anchor="middle">Lamp</text>
        <line x1="190" y1="30" x2="190" y2="50" stroke="#fbbf24" stroke-width="2" stroke-dasharray="3,3"/>
        
        <!-- Tank -->
        <rect x="80" y="60" width="220" height="80" fill="none" stroke="currentColor" stroke-width="2" rx="5"/>
        <text x="290" y="75" fill="currentColor" font-size="8">Tank</text>
        
        <!-- Water with waves -->
        <path d="M90 100 Q110 85, 130 100 T170 100 T210 100 T250 100 T290 100" 
              fill="none" stroke="#3b82f6" stroke-width="2" class="anim-wave"/>
        
        <!-- Motor/bar -->
        <rect x="90" y="65" width="200" height="8" fill="#6366f1" rx="2"/>
        <text x="190" y="62" fill="#6366f1" font-size="8" text-anchor="middle">Vibrating bar</text>
        
        <!-- Light rays -->
        <line x1="120" y1="50" x2="120" y2="60" stroke="#fbbf24" stroke-width="1" opacity="0.5"/>
        <line x1="190" y1="50" x2="190" y2="60" stroke="#fbbf24" stroke-width="1" opacity="0.5"/>
        <line x1="260" y1="50" x2="260" y2="60" stroke="#fbbf24" stroke-width="1" opacity="0.5"/>
        
        <!-- Screen below -->
        <rect x="80" y="160" width="220" height="25" fill="hsl(var(--muted))" stroke="currentColor" stroke-width="1" rx="3"/>
        <text x="190" y="177" fill="currentColor" font-size="9" text-anchor="middle">Screen showing wave shadows</text>
        
        <!-- Wave shadows on screen -->
        <g opacity="0.4">
          <line x1="110" y1="165" x2="110" y2="180" stroke="currentColor" stroke-width="1"/>
          <line x1="150" y1="165" x2="150" y2="180" stroke="currentColor" stroke-width="1"/>
          <line x1="190" y1="165" x2="190" y2="180" stroke="currentColor" stroke-width="1"/>
          <line x1="230" y1="165" x2="230" y2="180" stroke="currentColor" stroke-width="1"/>
          <line x1="270" y1="165" x2="270" y2="180" stroke="currentColor" stroke-width="1"/>
        </g>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>📏 Method – Measuring Wavelength:</h4>
    <ol>
      <li>Turn on the lamp → observe wave shadows on screen</li>
      <li>Identify at least 5 consecutive peaks</li>
      <li>Measure total distance and divide by number of wavelengths: λ = distance ÷ number of waves</li>
    </ol>
  </div>

  <div class="key-facts-block">
    <h4>📏 Method – Calculating Wave Speed:</h4>
    <p>Once λ and f are known: <strong>v = f × λ</strong></p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Error</th><th>Cause</th><th>Solution</th></tr></thead>
    <tbody>
      <tr><td>Blurry wave pattern</td><td>Water too deep or vibrations unstable</td><td>Use shallow water & steady frequency</td></tr>
      <tr><td>Difficult to see crests</td><td>Poor lighting</td><td>Adjust lamp, use white paper beneath</td></tr>
      <tr><td>Parallax error</td><td>Looking from an angle</td><td>Look directly above the measurement</td></tr>
      <tr><td>Timing error</td><td>Human reaction time</td><td>Use many waves → average</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 6 – Velocity, Frequency & Wavelength in Different Media</h3>
  
  <div class="key-facts-block">
    <h4>🔑 Key Rule:</h4>
    <ul>
      <li><strong>Frequency stays constant</strong> (set by the source)</li>
      <li><strong>Speed changes</strong> in different media</li>
      <li><strong>Wavelength changes</strong> because: v = fλ ⇒ λ ∝ v</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example: Sound moving from air → water</h4>
    <table class="data-table" style="margin: 0.5rem 0;">
      <thead><tr><th>Property</th><th>Air</th><th>Water</th><th>What Happens</th></tr></thead>
      <tbody>
        <tr><td>Speed</td><td>Lower</td><td>Higher</td><td>Increases</td></tr>
        <tr><td>Wavelength</td><td>Shorter</td><td>Longer</td><td>Increases</td></tr>
        <tr><td>Frequency</td><td>Same</td><td>Same</td><td>No change</td></tr>
      </tbody>
    </table>
  </div>
</div>
            \`,
            canonical_keywords: ["amplitude", "wavelength", "frequency", "period", "wave speed", "v=fλ", "ripple tank"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "A wave has frequency 50 Hz and wavelength 2 m. Calculate the wave speed.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["v=fλ", "100 m/s"]
              },
              {
                id: "p2",
                prompt_template: "Define amplitude and wavelength.",
                marks: 4,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["amplitude", "maximum displacement", "rest position", "wavelength", "distance", "crest to crest"]
              },
              {
                id: "p3",
                prompt_template: "Describe how to measure the wavelength of water waves in a ripple tank.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["lamp", "shadows", "count waves", "measure distance", "divide"]
              }
            ]
          },
          {
            id: "4-6-1-3-reflection-waves",
            title: "4.6.1.3 – Reflection of Waves",
            type: "content",
            study_group: 2,
            content_html: \`
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Waves at Boundaries</h3>
  
  <div class="definition-block">
    <h4>🌊 What happens at boundaries:</h4>
    <p>When a wave meets the boundary between two different materials, three things can happen:</p>
    <ul>
      <li><strong>Reflection:</strong> Wave bounces back into the original medium</li>
      <li><strong>Transmission:</strong> Wave passes through the boundary into the new medium</li>
      <li><strong>Absorption:</strong> Energy from the wave is absorbed by the material (often turns into thermal energy)</li>
    </ul>
  </div>

  <!-- Wave at Boundary Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌊 Wave Behaviour at Boundaries</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="180" viewBox="0 0 400 180">
        <!-- Boundary line -->
        <line x1="200" y1="20" x2="200" y2="160" stroke="currentColor" stroke-width="3"/>
        <text x="200" y="175" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Boundary</text>
        
        <!-- Medium labels -->
        <text x="100" y="30" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">Medium 1</text>
        <text x="300" y="30" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">Medium 2</text>
        
        <!-- Incident wave -->
        <line x1="60" y1="60" x2="200" y2="90" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowBlue)"/>
        <text x="100" y="55" fill="#3b82f6" font-size="9">Incident</text>
        
        <!-- Reflected wave -->
        <line x1="200" y1="90" x2="60" y2="120" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowRed)"/>
        <text x="100" y="140" fill="#ef4444" font-size="9">Reflected</text>
        
        <!-- Transmitted wave -->
        <line x1="200" y1="90" x2="340" y2="120" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowGreen)"/>
        <text x="300" y="110" fill="#22c55e" font-size="9">Transmitted</text>
        
        <!-- Absorbed indicator -->
        <g class="anim-pulse">
          <circle cx="200" cy="90" r="8" fill="#f59e0b" opacity="0.5"/>
        </g>
        <text x="215" y="75" fill="#f59e0b" font-size="8">Some</text>
        <text x="215" y="85" fill="#f59e0b" font-size="8">absorbed</text>
        
        <defs>
          <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
          </marker>
          <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444"/>
          </marker>
          <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Behaviour</th><th>What Happens</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td>Reflection</td><td>Wave returns into original medium</td><td>Light bouncing off mirror</td></tr>
      <tr><td>Transmission</td><td>Wave continues into second medium</td><td>Light through glass</td></tr>
      <tr><td>Absorption</td><td>Energy absorbed by surface</td><td>Dark objects absorbing light → heating</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Law of Reflection</h3>
  
  <div class="definition-block">
    <h4>📐 Key Terms:</h4>
    <ul>
      <li><strong>Incident ray:</strong> ray that hits the boundary</li>
      <li><strong>Reflected ray:</strong> ray that bounces off</li>
      <li><strong>Normal:</strong> dotted line at 90° to the boundary</li>
      <li><strong>Angle of incidence (i):</strong> between incident ray and normal</li>
      <li><strong>Angle of reflection (r):</strong> between reflected ray and normal</li>
    </ul>
  </div>

  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4 style="margin-bottom: 0.5rem;">⚖️ Law of Reflection:</h4>
    <p style="font-size: 1.8rem; font-weight: bold; color: hsl(var(--primary));">∠i = ∠r</p>
    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Angle of incidence = Angle of reflection</p>
  </div>

  <!-- Reflection Ray Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Ray Diagram for Reflection</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="200" viewBox="0 0 380 200">
        <!-- Mirror surface -->
        <line x1="60" y1="140" x2="320" y2="140" stroke="currentColor" stroke-width="4"/>
        <text x="340" y="145" fill="currentColor" font-size="9">Mirror</text>
        
        <!-- Hatching for mirror -->
        <g opacity="0.4">
          <line x1="70" y1="140" x2="60" y2="155" stroke="currentColor" stroke-width="1"/>
          <line x1="100" y1="140" x2="90" y2="155" stroke="currentColor" stroke-width="1"/>
          <line x1="130" y1="140" x2="120" y2="155" stroke="currentColor" stroke-width="1"/>
          <line x1="160" y1="140" x2="150" y2="155" stroke="currentColor" stroke-width="1"/>
          <line x1="190" y1="140" x2="180" y2="155" stroke="currentColor" stroke-width="1"/>
          <line x1="220" y1="140" x2="210" y2="155" stroke="currentColor" stroke-width="1"/>
          <line x1="250" y1="140" x2="240" y2="155" stroke="currentColor" stroke-width="1"/>
          <line x1="280" y1="140" x2="270" y2="155" stroke="currentColor" stroke-width="1"/>
          <line x1="310" y1="140" x2="300" y2="155" stroke="currentColor" stroke-width="1"/>
        </g>
        
        <!-- Normal line -->
        <line x1="190" y1="40" x2="190" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="205" y="50" fill="currentColor" font-size="9">Normal</text>
        
        <!-- Incident ray -->
        <line x1="80" y1="50" x2="190" y2="140" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowInc)"/>
        <text x="100" y="70" fill="#3b82f6" font-size="10" font-weight="bold">Incident ray</text>
        
        <!-- Reflected ray -->
        <line x1="190" y1="140" x2="300" y2="50" stroke="#ef4444" stroke-width="2" marker-end="url(#arrowRef)"/>
        <text x="270" y="70" fill="#ef4444" font-size="10" font-weight="bold">Reflected ray</text>
        
        <!-- Angle of incidence arc -->
        <path d="M190 100 A40 40 0 0 0 155 125" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="155" y="95" fill="#3b82f6" font-size="11" font-weight="bold">i</text>
        
        <!-- Angle of reflection arc -->
        <path d="M190 100 A40 40 0 0 1 225 125" fill="none" stroke="#ef4444" stroke-width="2"/>
        <text x="225" y="95" fill="#ef4444" font-size="11" font-weight="bold">r</text>
        
        <!-- Law statement -->
        <rect x="130" y="170" width="120" height="25" fill="hsl(var(--primary)/0.2)" rx="5"/>
        <text x="190" y="187" fill="hsl(var(--primary))" font-size="12" text-anchor="middle" font-weight="bold">∠i = ∠r</text>
        
        <defs>
          <marker id="arrowInc" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
          </marker>
          <marker id="arrowRef" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>✏️ How to Draw a Reflection Ray Diagram:</h4>
    <ol>
      <li>Draw the boundary (horizontal line)</li>
      <li>Draw a normal at 90°</li>
      <li>Draw an incident ray hitting the boundary</li>
      <li>Measure angle of incidence using a protractor</li>
      <li>Draw reflected ray so angle of reflection equals angle of incidence</li>
      <li>Label all components</li>
    </ol>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Effects of Reflection, Transmission & Absorption</h3>
  
  <div class="key-facts-block">
    <h4>🪞 Reflection Effects:</h4>
    <ul>
      <li>Produces echoes (sound)</li>
      <li>Determines how signals bounce off surfaces (radio, sonar)</li>
      <li>Creates images in mirrors</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>➡️ Transmission Effects:</h4>
    <ul>
      <li>When waves enter a new medium they may change speed and direction (leading to refraction)</li>
      <li>Some waves are partially transmitted and partially reflected</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🔥 Absorption Effects:</h4>
    <ul>
      <li>Reduces the amplitude of a wave</li>
      <li>Microphones rely on some absorption inside their casing</li>
      <li>Dark surfaces absorb more light → heat up faster</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Required Practical: Reflection</h3>
  
  <div class="key-facts-block">
    <h4>🎯 Aim:</h4>
    <p>Investigate the law of reflection using ray boxes and plane mirrors.</p>
  </div>

  <div class="key-facts-block">
    <h4>🔬 Equipment:</h4>
    <ul>
      <li>Ray box</li>
      <li>Plane mirror</li>
      <li>Protractor</li>
      <li>Ruler</li>
      <li>Paper</li>
      <li>Pencil</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>📋 Method:</h4>
    <ol>
      <li>Place the mirror on a sheet of paper and draw around it</li>
      <li>Draw a normal line at 90° to the mirror's surface</li>
      <li>Shine a single ray from the ray box onto the mirror at a known angle</li>
      <li>Mark the incident ray and reflected ray</li>
      <li>Measure angles with a protractor</li>
      <li>Repeat for several angles</li>
    </ol>
  </div>

  <div class="key-facts-block">
    <h4>✅ Expected Result:</h4>
    <p><strong>∠i = ∠r</strong> — This confirms the law of reflection.</p>
  </div>
</div>
            \`,
            canonical_keywords: ["reflection", "transmission", "absorption", "boundary", "incident ray", "reflected ray", "normal", "angle of incidence", "angle of reflection"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "State the law of reflection.",
                marks: 2,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["angle of incidence", "angle of reflection", "equal"]
              },
              {
                id: "p2",
                prompt_template: "Describe what happens when a wave meets a boundary between two materials.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["reflection", "transmission", "absorption", "boundary"]
              }
            ]
          },
          {
            id: "4-6-1-4-sound-waves",
            title: "4.6.1.4 – Sound Waves",
            type: "content",
            study_group: 2,
            content_html: \`
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – How Sound Waves Are Produced and Travel</h3>
  
  <div class="definition-block">
    <h4>🔊 Sound Waves:</h4>
    <p>Sound waves are <strong>longitudinal</strong> waves consisting of:</p>
    <ul>
      <li><strong>Compressions</strong> (high pressure)</li>
      <li><strong>Rarefactions</strong> (low pressure)</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🌐 How They Travel:</h4>
    <p>Sound waves travel as vibrations of particles in:</p>
    <ul>
      <li>Solids</li>
      <li>Liquids</li>
      <li>Gases</li>
    </ul>
    <p>They <strong>cannot travel in a vacuum</strong> because there are no particles to vibrate.</p>
  </div>

  <!-- Sound Wave Speed Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔊 Speed of Sound in Different Media</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="150" viewBox="0 0 400 150">
        <!-- Solid bar -->
        <rect x="30" y="30" width="100" height="30" fill="#3b82f6" rx="3"/>
        <text x="80" y="50" fill="white" font-size="10" text-anchor="middle" font-weight="bold">SOLID</text>
        <text x="80" y="80" fill="#3b82f6" font-size="9" text-anchor="middle">Fastest</text>
        <text x="80" y="92" fill="#3b82f6" font-size="8" text-anchor="middle">~5000 m/s</text>
        
        <!-- Liquid bar -->
        <rect x="150" y="30" width="100" height="30" fill="#22c55e" rx="3"/>
        <text x="200" y="50" fill="white" font-size="10" text-anchor="middle" font-weight="bold">LIQUID</text>
        <text x="200" y="80" fill="#22c55e" font-size="9" text-anchor="middle">Medium</text>
        <text x="200" y="92" fill="#22c55e" font-size="8" text-anchor="middle">~1500 m/s</text>
        
        <!-- Gas bar -->
        <rect x="270" y="30" width="100" height="30" fill="#f59e0b" rx="3"/>
        <text x="320" y="50" fill="white" font-size="10" text-anchor="middle" font-weight="bold">GAS</text>
        <text x="320" y="80" fill="#f59e0b" font-size="9" text-anchor="middle">Slowest</text>
        <text x="320" y="92" fill="#f59e0b" font-size="8" text-anchor="middle">~340 m/s</text>
        
        <!-- Particle density indicators -->
        <g>
          <circle cx="40" cy="115" r="3" fill="#3b82f6"/><circle cx="48" cy="115" r="3" fill="#3b82f6"/><circle cx="56" cy="115" r="3" fill="#3b82f6"/>
          <circle cx="64" cy="115" r="3" fill="#3b82f6"/><circle cx="72" cy="115" r="3" fill="#3b82f6"/><circle cx="80" cy="115" r="3" fill="#3b82f6"/>
          <circle cx="88" cy="115" r="3" fill="#3b82f6"/><circle cx="96" cy="115" r="3" fill="#3b82f6"/><circle cx="104" cy="115" r="3" fill="#3b82f6"/>
          <circle cx="112" cy="115" r="3" fill="#3b82f6"/><circle cx="120" cy="115" r="3" fill="#3b82f6"/>
        </g>
        <g>
          <circle cx="160" cy="115" r="3" fill="#22c55e"/><circle cx="175" cy="115" r="3" fill="#22c55e"/><circle cx="190" cy="115" r="3" fill="#22c55e"/>
          <circle cx="205" cy="115" r="3" fill="#22c55e"/><circle cx="220" cy="115" r="3" fill="#22c55e"/><circle cx="235" cy="115" r="3" fill="#22c55e"/>
        </g>
        <g>
          <circle cx="280" cy="115" r="3" fill="#f59e0b"/><circle cx="310" cy="115" r="3" fill="#f59e0b"/><circle cx="340" cy="115" r="3" fill="#f59e0b"/>
        </g>
        
        <text x="80" y="135" fill="currentColor" font-size="8" text-anchor="middle">Very close</text>
        <text x="200" y="135" fill="currentColor" font-size="8" text-anchor="middle">Moderate</text>
        <text x="320" y="135" fill="currentColor" font-size="8" text-anchor="middle">Far apart</text>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Medium</th><th>Particle Spacing</th><th>Speed of Sound</th><th>Reason</th></tr></thead>
    <tbody>
      <tr><td>Solids</td><td>Very close</td><td>Fastest</td><td>Vibrations transfer quickly</td></tr>
      <tr><td>Liquids</td><td>Moderate</td><td>Medium</td><td>Less rigid but still connected</td></tr>
      <tr><td>Gases</td><td>Far apart</td><td>Slowest</td><td>Fewer collisions between particles</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Sound Causing Vibrations in Solids</h3>
  
  <div class="definition-block">
    <h4>📢 Explanation:</h4>
    <p>When a sound wave hits a solid, the air vibrations cause the particles in the solid to vibrate in the same pattern.</p>
  </div>

  <div class="example-block">
    <h4>💡 Examples:</h4>
    <ul>
      <li>A window rattling when a loud vehicle passes</li>
      <li>A metal door vibrating when someone shouts</li>
      <li>A tuning fork pressed onto a table making it louder (table vibrates too)</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Sound Waves and the Human Ear</h3>
  
  <div class="key-facts-block">
    <h4>👂 How the Ear Works:</h4>
    <ol>
      <li><strong>Sound waves enter ear canal</strong> — Longitudinal pressure waves from air</li>
      <li><strong>Eardrum vibrates</strong> — Acts like a small solid membrane, converts air vibrations → solid vibrations</li>
      <li><strong>Ossicles vibrate</strong> (hammer, anvil, stirrup) — Bones amplify vibrations</li>
      <li><strong>Cochlea fluid vibrates</strong> — Liquid vibrations inside the inner ear</li>
      <li><strong>Hair cells bend</strong> — Convert vibrations → electrical nerve impulses</li>
      <li><strong>Brain interprets signals</strong> as sound</li>
    </ol>
  </div>

  <!-- Human Ear Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>👂 Sound Wave to Brain Signal</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="100" viewBox="0 0 400 100">
        <!-- Process flow -->
        <rect x="10" y="30" width="55" height="40" fill="#3b82f6" rx="5"/>
        <text x="37" y="52" fill="white" font-size="8" text-anchor="middle">Sound</text>
        <text x="37" y="62" fill="white" font-size="8" text-anchor="middle">Wave</text>
        
        <path d="M70 50 L90 50" stroke="currentColor" stroke-width="2" marker-end="url(#arrowFlow)"/>
        
        <rect x="95" y="30" width="55" height="40" fill="#22c55e" rx="5"/>
        <text x="122" y="52" fill="white" font-size="8" text-anchor="middle">Eardrum</text>
        <text x="122" y="62" fill="white" font-size="8" text-anchor="middle">Vibrates</text>
        
        <path d="M155 50 L175 50" stroke="currentColor" stroke-width="2" marker-end="url(#arrowFlow)"/>
        
        <rect x="180" y="30" width="55" height="40" fill="#f59e0b" rx="5"/>
        <text x="207" y="52" fill="white" font-size="8" text-anchor="middle">Ossicles</text>
        <text x="207" y="62" fill="white" font-size="8" text-anchor="middle">Amplify</text>
        
        <path d="M240 50 L260 50" stroke="currentColor" stroke-width="2" marker-end="url(#arrowFlow)"/>
        
        <rect x="265" y="30" width="55" height="40" fill="#ec4899" rx="5"/>
        <text x="292" y="52" fill="white" font-size="8" text-anchor="middle">Cochlea</text>
        <text x="292" y="62" fill="white" font-size="8" text-anchor="middle">Hair Cells</text>
        
        <path d="M325 50 L345 50" stroke="currentColor" stroke-width="2" marker-end="url(#arrowFlow)"/>
        
        <rect x="350" y="30" width="45" height="40" fill="#6366f1" rx="5"/>
        <text x="372" y="52" fill="white" font-size="8" text-anchor="middle">Brain</text>
        <text x="372" y="62" fill="white" font-size="8" text-anchor="middle">Signal</text>
        
        <!-- Labels below -->
        <text x="37" y="85" fill="#3b82f6" font-size="7" text-anchor="middle">Air</text>
        <text x="122" y="85" fill="#22c55e" font-size="7" text-anchor="middle">Solid</text>
        <text x="207" y="85" fill="#f59e0b" font-size="7" text-anchor="middle">Solid</text>
        <text x="292" y="85" fill="#ec4899" font-size="7" text-anchor="middle">Liquid</text>
        <text x="372" y="85" fill="#6366f1" font-size="7" text-anchor="middle">Electrical</text>
        
        <defs>
          <marker id="arrowFlow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="currentColor"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Human Hearing Range</h3>
  
  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4 style="margin-bottom: 0.5rem;">👂 Human Hearing Range:</h4>
    <p style="font-size: 1.8rem; font-weight: bold; color: hsl(var(--primary));">20 Hz – 20 kHz</p>
    <p style="font-size: 0.9rem; margin-top: 0.5rem;">Children and teenagers have the widest range; hearing ability reduces with age.</p>
  </div>

  <div class="key-facts-block">
    <h4>🔇 Why Limited Frequency Range?</h4>
    <ul>
      <li><strong>Ear structures cannot vibrate at all frequencies</strong> — The eardrum is thin and delicate</li>
      <li><strong>High frequencies (>20 kHz)</strong> — vibrations too fast, hair cells cannot keep up</li>
      <li><strong>Low frequencies (<20 Hz)</strong> — cause little movement of ear structures</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>🐕 Other Animals:</h4>
    <ul>
      <li>Dogs: up to 45 kHz</li>
      <li>Bats: up to 100 kHz</li>
      <li>Elephants: use infrasound (< 20 Hz)</li>
    </ul>
  </div>
</div>
            \`,
            canonical_keywords: ["sound waves", "longitudinal", "compression", "rarefaction", "eardrum", "cochlea", "hearing range", "20 Hz", "20 kHz"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain why sound cannot travel through a vacuum.",
                marks: 3,
                type: "short-answer",
                difficulty: "easy",
                randomise: true,
                expected_keywords: ["vacuum", "no particles", "vibrate", "longitudinal"]
              },
              {
                id: "p2",
                prompt_template: "State the human hearing range and explain why we cannot hear frequencies outside this range.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["20 Hz", "20 kHz", "eardrum", "hair cells", "cannot respond"]
              }
            ]
          },
          {
            id: "4-6-1-5-detection-exploration",
            title: "4.6.1.5 – Waves for Detection and Exploration",
            type: "content",
            study_group: 3,
            content_html: \`
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Using Waves to Explore Hidden Structures</h3>
  
  <div class="definition-block">
    <h4>🔍 Key Idea:</h4>
    <p>When waves meet boundaries between different materials, parts of the wave are:</p>
    <ul>
      <li>Reflected</li>
      <li>Transmitted</li>
      <li>Absorbed</li>
    </ul>
    <p>Their <strong>speed changes</strong> — these changes allow us to detect objects or boundaries we cannot see directly.</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Material Change</th><th>Wave Behaviour</th><th>Use</th></tr></thead>
    <tbody>
      <tr><td>Solid → Liquid</td><td>Speed changes, partial reflection</td><td>Ultrasound imaging</td></tr>
      <tr><td>Liquid → Solid</td><td>Strong reflection</td><td>Industrial crack detection</td></tr>
      <tr><td>Solid → Solid (layers)</td><td>Reflections vary</td><td>Seismic mapping of Earth</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Ultrasound Waves</h3>
  
  <div class="definition-block">
    <h4>🔊 Key Properties:</h4>
    <ul>
      <li>Frequency <strong>above 20 kHz</strong> (higher than human hearing range)</li>
      <li>Partially reflected at boundaries between different media</li>
      <li>Travel safely through body tissues → harmless</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🏥 How Ultrasound Imaging Works:</h4>
    <ol>
      <li>Ultrasound pulse is transmitted into the body/object</li>
      <li>When it reaches a boundary, part of the wave is reflected</li>
      <li>A detector measures the time taken for reflections to return</li>
      <li>A computer calculates distance: <strong>distance = (speed × time) ÷ 2</strong></li>
    </ol>
    <p><em>(Divide by 2 because the wave travels to the boundary AND back)</em></p>
  </div>

  <!-- Ultrasound Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🏥 Ultrasound Imaging (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="180" viewBox="0 0 380 180">
        <!-- Probe -->
        <rect x="30" y="60" width="40" height="80" fill="#6366f1" rx="5"/>
        <text x="50" y="110" fill="white" font-size="8" text-anchor="middle">Probe</text>
        
        <!-- Body/tissue -->
        <rect x="80" y="40" width="200" height="120" fill="hsl(var(--muted))" rx="10" stroke="currentColor" stroke-width="1"/>
        <text x="180" y="55" fill="currentColor" font-size="9" text-anchor="middle">Body Tissue</text>
        
        <!-- Organ/boundary -->
        <ellipse cx="200" cy="100" rx="40" ry="35" fill="#ec4899" opacity="0.6"/>
        <text x="200" y="105" fill="white" font-size="9" text-anchor="middle">Organ</text>
        
        <!-- Outgoing wave -->
        <g class="anim-flow-right">
          <line x1="75" y1="85" x2="155" y2="85" stroke="#3b82f6" stroke-width="2"/>
          <circle cx="155" cy="85" r="4" fill="#3b82f6"/>
        </g>
        
        <!-- Reflected wave -->
        <g class="anim-flow-left" style="animation-delay: 0.5s;">
          <line x1="155" y1="115" x2="75" y2="115" stroke="#ef4444" stroke-width="2"/>
          <circle cx="75" cy="115" r="4" fill="#ef4444"/>
        </g>
        
        <!-- Labels -->
        <text x="115" y="78" fill="#3b82f6" font-size="8">Transmitted pulse</text>
        <text x="115" y="130" fill="#ef4444" font-size="8">Reflected pulse</text>
        
        <!-- Screen -->
        <rect x="300" y="50" width="70" height="80" fill="#1e1e1e" stroke="currentColor" stroke-width="2" rx="5"/>
        <ellipse cx="335" cy="90" rx="20" ry="15" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="335" y="145" fill="currentColor" font-size="8" text-anchor="middle">Image formed</text>
        
        <!-- Formula -->
        <text x="335" y="165" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">d = (v × t) ÷ 2</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>💊 Uses of Ultrasound:</h4>
    <p><strong>Medical:</strong></p>
    <ul>
      <li>Prenatal (baby) scans</li>
      <li>Organ imaging</li>
      <li>Blood flow monitoring</li>
    </ul>
    <p><strong>Industrial:</strong></p>
    <ul>
      <li>Detecting cracks in metals</li>
      <li>Checking pipeline thickness</li>
      <li>Finding faults deep inside materials</li>
    </ul>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Feature</th><th>Benefit</th></tr></thead>
    <tbody>
      <tr><td>High frequency</td><td>High detail images</td></tr>
      <tr><td>Safe</td><td>No ionising radiation</td></tr>
      <tr><td>Reflects at boundaries</td><td>Allows depth measurement</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Seismic Waves</h3>
  
  <div class="definition-block">
    <h4>🌍 What are Seismic Waves?</h4>
    <p>Seismic waves are produced by earthquakes. They allow exploration of the structure of the Earth.</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Wave Type</th><th>Nature</th><th>Travels Through</th><th>Speed</th><th>Notes</th></tr></thead>
    <tbody>
      <tr><td>P-waves</td><td>Longitudinal</td><td>Solids & liquids</td><td>Fast</td><td>Arrive first</td></tr>
      <tr><td>S-waves</td><td>Transverse</td><td>Only solids</td><td>Slower</td><td>Cannot travel through liquid outer core</td></tr>
    </tbody>
  </table>

  <!-- Seismic Waves Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🌍 P-waves vs S-waves Through Earth</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="380" height="200" viewBox="0 0 380 200">
        <!-- Earth circle -->
        <circle cx="190" cy="100" r="90" fill="none" stroke="currentColor" stroke-width="2"/>
        
        <!-- Inner core -->
        <circle cx="190" cy="100" r="20" fill="#f59e0b"/>
        <text x="190" y="103" fill="white" font-size="7" text-anchor="middle">Inner</text>
        
        <!-- Outer core (liquid) -->
        <circle cx="190" cy="100" r="45" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="190" y="62" fill="#ef4444" font-size="8" text-anchor="middle">Liquid outer core</text>
        
        <!-- Mantle -->
        <circle cx="190" cy="100" r="70" fill="none" stroke="#22c55e" stroke-width="1" opacity="0.5"/>
        
        <!-- Earthquake source -->
        <circle cx="100" cy="50" r="8" fill="#ec4899" class="anim-pulse"/>
        <text x="100" y="35" fill="#ec4899" font-size="8" text-anchor="middle">Earthquake</text>
        
        <!-- P-wave path (curves through) -->
        <path d="M108 55 Q190 100, 272 55" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <path d="M108 55 Q190 150, 272 145" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="310" y="50" fill="#3b82f6" font-size="9">P-waves</text>
        <text x="310" y="62" fill="#3b82f6" font-size="8">(through)</text>
        
        <!-- S-wave blocked -->
        <path d="M108 55 Q150 100, 145 100" fill="none" stroke="#ef4444" stroke-width="2"/>
        <text x="145" y="115" fill="#ef4444" font-size="8">S-waves</text>
        <text x="145" y="127" fill="#ef4444" font-size="7">BLOCKED</text>
        
        <!-- S-wave shadow zone -->
        <path d="M235 55 A90 90 0 0 1 280 145" fill="none" stroke="#ef4444" stroke-width="8" opacity="0.2"/>
        <text x="310" y="140" fill="#ef4444" font-size="8">Shadow</text>
        <text x="310" y="152" fill="#ef4444" font-size="8">zone</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>🔑 Why S-Waves Cannot Travel Through Liquids:</h4>
    <ul>
      <li>Liquids do not support shear vibrations</li>
      <li>Transverse waves need a rigid material to pass vibrations through</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🌍 What This Tells Us About Earth's Structure:</h4>
    <ul>
      <li>S-waves do NOT appear on opposite side of Earth → there is a large liquid region → the outer core</li>
      <li>P-waves change direction (refract) as they travel through layers → reveals layer boundaries</li>
    </ul>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 4 – Echo Sounding (Sonar)</h3>
  
  <div class="definition-block">
    <h4>🚢 What is Echo Sounding?</h4>
    <p>Uses high-frequency sound waves to explore deep water and detect objects underwater.</p>
  </div>

  <div class="key-facts-block">
    <h4>⚓ How It Works:</h4>
    <ol>
      <li>A ship sends a pulse of ultrasound downward</li>
      <li>The wave reflects off the seabed or underwater object</li>
      <li>A detector on the ship receives the reflection</li>
      <li>Calculate: <strong>depth = (speed of sound in water × time) ÷ 2</strong></li>
    </ol>
  </div>

  <!-- Sonar Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>🚢 Echo Sounding / Sonar (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="300" height="180" viewBox="0 0 300 180">
        <!-- Water surface -->
        <line x1="20" y1="30" x2="280" y2="30" stroke="#3b82f6" stroke-width="2"/>
        <text x="260" y="25" fill="#3b82f6" font-size="8">Water surface</text>
        
        <!-- Ship -->
        <rect x="120" y="15" width="60" height="20" fill="currentColor" rx="3"/>
        <text x="150" y="12" fill="currentColor" font-size="8" text-anchor="middle">Ship</text>
        
        <!-- Seabed -->
        <path d="M20 150 Q80 140, 150 150 T280 150" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <text x="260" y="165" fill="#f59e0b" font-size="8">Seabed</text>
        
        <!-- Outgoing pulse -->
        <g class="anim-flow-down">
          <line x1="150" y1="40" x2="150" y2="100" stroke="#22c55e" stroke-width="2"/>
          <circle cx="150" cy="100" r="5" fill="#22c55e"/>
        </g>
        
        <!-- Reflected pulse -->
        <g class="anim-flow-up" style="animation-delay: 1s;">
          <line x1="150" y1="145" x2="150" y2="100" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="100" r="5" fill="#ef4444"/>
        </g>
        
        <!-- Depth marker -->
        <line x1="200" y1="35" x2="200" y2="145" stroke="#ec4899" stroke-width="1" stroke-dasharray="4,4"/>
        <text x="220" y="90" fill="#ec4899" font-size="9">Depth</text>
        
        <!-- Formula -->
        <text x="150" y="175" fill="currentColor" font-size="9" text-anchor="middle" font-weight="bold">d = (v × t) ÷ 2</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block">
    <h4>🎯 Uses:</h4>
    <ul>
      <li>Measuring ocean depth</li>
      <li>Detecting submarines or shipwrecks</li>
      <li>Mapping fish populations</li>
      <li>Checking underwater pipes & structures</li>
    </ul>
  </div>
</div>
            \`,
            canonical_keywords: ["ultrasound", "seismic waves", "P-waves", "S-waves", "echo sounding", "sonar", "detection", "exploration"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain how ultrasound is used to create images of a baby in the womb.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["ultrasound", "pulse", "boundary", "reflected", "time", "distance", "image"]
              },
              {
                id: "p2",
                prompt_template: "Explain why S-waves cannot travel through the Earth's outer core and what this tells us about its structure.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["S-waves", "transverse", "liquid", "outer core", "shear", "cannot travel"]
              },
              {
                id: "p3",
                prompt_template: "A sonar pulse takes 0.4 seconds to return from the seabed. The speed of sound in water is 1500 m/s. Calculate the depth of the seabed.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["300 m", "divide by 2", "distance = speed × time"]
              }
            ]
          },
          {
            id: "4-6-2-specular-diffuse",
            title: "4.6.2.6 – Specular & Diffuse Reflection",
            type: "content",
            study_group: 3,
            content_html: \`
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – Types of Reflection</h3>
  
  <div class="definition-block">
    <h4>🪞 Specular Reflection:</h4>
    <table class="data-table" style="margin: 0.5rem 0;">
      <tbody>
        <tr><td><strong>Surface</strong></td><td>Smooth & flat (mirror, polished metal)</td></tr>
        <tr><td><strong>Reflection</strong></td><td>Neat, single clear direction</td></tr>
        <tr><td><strong>Result</strong></td><td>Clear image formed</td></tr>
      </tbody>
    </table>
  </div>

  <div class="definition-block">
    <h4>📄 Diffuse Reflection:</h4>
    <table class="data-table" style="margin: 0.5rem 0;">
      <tbody>
        <tr><td><strong>Surface</strong></td><td>Rough or uneven (paper, wood, stone)</td></tr>
        <tr><td><strong>Reflection</strong></td><td>Scattered in multiple directions</td></tr>
        <tr><td><strong>Result</strong></td><td>No clear image</td></tr>
      </tbody>
    </table>
  </div>

  <!-- Specular vs Diffuse Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🪞 Specular vs Diffuse Reflection</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="160" viewBox="0 0 400 160">
        <!-- Specular side -->
        <text x="100" y="20" fill="#3b82f6" font-size="12" text-anchor="middle" font-weight="bold">Specular</text>
        
        <!-- Smooth surface -->
        <line x1="30" y1="100" x2="170" y2="100" stroke="#3b82f6" stroke-width="3"/>
        <text x="100" y="115" fill="currentColor" font-size="8" text-anchor="middle">Smooth surface</text>
        
        <!-- Incident rays (parallel) -->
        <line x1="60" y1="40" x2="80" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <line x1="90" y1="40" x2="100" y2="100" stroke="#f59e0b" stroke-width="2"/>
        <line x1="120" y1="40" x2="120" y2="100" stroke="#f59e0b" stroke-width="2"/>
        
        <!-- Reflected rays (parallel) -->
        <line x1="80" y1="100" x2="100" y2="40" stroke="#22c55e" stroke-width="2"/>
        <line x1="100" y1="100" x2="110" y2="40" stroke="#22c55e" stroke-width="2"/>
        <line x1="120" y1="100" x2="120" y2="40" stroke="#22c55e" stroke-width="2"/>
        
        <text x="100" y="145" fill="#22c55e" font-size="9" text-anchor="middle">Clear image ✓</text>
        
        <!-- Divider -->
        <line x1="200" y1="10" x2="200" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5" opacity="0.3"/>
        
        <!-- Diffuse side -->
        <text x="300" y="20" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">Diffuse</text>
        
        <!-- Rough surface -->
        <path d="M230 100 L240 95 L250 100 L260 95 L270 100 L280 95 L290 100 L300 95 L310 100 L320 95 L330 100 L340 95 L350 100 L360 95 L370 100" 
              fill="none" stroke="#ef4444" stroke-width="3"/>
        <text x="300" y="115" fill="currentColor" font-size="8" text-anchor="middle">Rough surface</text>
        
        <!-- Incident rays -->
        <line x1="280" y1="40" x2="290" y2="98" stroke="#f59e0b" stroke-width="2"/>
        <line x1="300" y1="40" x2="300" y2="98" stroke="#f59e0b" stroke-width="2"/>
        <line x1="320" y1="40" x2="310" y2="98" stroke="#f59e0b" stroke-width="2"/>
        
        <!-- Scattered reflected rays -->
        <line x1="290" y1="98" x2="260" y2="50" stroke="#22c55e" stroke-width="2"/>
        <line x1="300" y1="98" x2="310" y2="45" stroke="#22c55e" stroke-width="2"/>
        <line x1="310" y1="98" x2="350" y2="55" stroke="#22c55e" stroke-width="2"/>
        <line x1="290" y1="98" x2="295" y2="45" stroke="#22c55e" stroke-width="2"/>
        <line x1="310" y1="98" x2="320" y2="50" stroke="#22c55e" stroke-width="2"/>
        
        <text x="300" y="145" fill="#ef4444" font-size="9" text-anchor="middle">No clear image ✗</text>
      </svg>
    </div>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Why Surfaces Behave Differently</h3>
  
  <div class="key-facts-block">
    <h4>🔬 Explanation:</h4>
    <ul>
      <li><strong>Smooth surfaces</strong> have evenly aligned microscopic surfaces → all rays reflect in the same direction</li>
      <li><strong>Rough surfaces</strong> have irregular microscopic bumps → rays reflect at many angles</li>
      <li>In both cases, the law of reflection still holds for each individual ray: <strong>∠i = ∠r</strong></li>
      <li>But diffuse reflections scatter because each tiny bump causes a slightly different local normal</li>
    </ul>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Type</th><th>Examples</th><th>What You Observe</th></tr></thead>
    <tbody>
      <tr><td>Specular</td><td>Mirrors, calm water, polished metal</td><td>Clear reflections, sharp images</td></tr>
      <tr><td>Diffuse</td><td>Paper, rough concrete, unpolished wood</td><td>Light spreads out, no image</td></tr>
    </tbody>
  </table>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 3 – Why Diffuse Reflection Is Important</h3>
  
  <div class="key-facts-block">
    <h4>✨ Benefits of Diffuse Reflection:</h4>
    <ul>
      <li>Prevents glare</li>
      <li>Allows us to see most objects (they scatter light into our eyes)</li>
      <li>Helps provide even illumination in classrooms/homes</li>
      <li>Essential for photography and cinema lighting</li>
    </ul>
  </div>
</div>
            \`,
            canonical_keywords: ["specular reflection", "diffuse reflection", "smooth surface", "rough surface", "mirror", "scatter"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain the difference between specular and diffuse reflection.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["specular", "smooth", "same direction", "diffuse", "rough", "scattered"]
              }
            ]
          },
          {
            id: "4-6-2-2-em-properties",
            title: "4.6.2.2 – Properties of EM Waves",
            type: "content",
            study_group: 3,
            content_html: \`
<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 1 – How EM Waves Interact with Substances</h3>
  
  <div class="definition-block">
    <h4>🌈 Key Behaviours:</h4>
    <p>Different materials can absorb, transmit, refract, or reflect electromagnetic (EM) waves. These effects depend on the wavelength of the EM wave and the material's properties.</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Process</th><th>Description</th><th>Examples</th></tr></thead>
    <tbody>
      <tr><td>Absorption</td><td>Wave energy is taken in by the material</td><td>Black surfaces absorb visible light → heat up</td></tr>
      <tr><td>Transmission</td><td>Wave passes through the material</td><td>Glass allows visible light through</td></tr>
      <tr><td>Reflection</td><td>Wave bounces off a surface</td><td>Mirrors reflect visible light</td></tr>
      <tr><td>Refraction</td><td>Wave changes direction when entering a new material</td><td>Light bending in water</td></tr>
    </tbody>
  </table>

  <div class="key-facts-block">
    <h4>🔑 Key Idea:</h4>
    <p>The same wave can behave differently in different materials (e.g., infrared passes easily through glass; ultraviolet does not).</p>
  </div>
</div>

<div class="subsection">
  <h3 class="subsection-heading">🧩 Subsection 2 – Why Refraction Occurs</h3>
  
  <div class="key-facts-block">
    <h4>🔄 When an EM Wave Enters a New Medium:</h4>
    <ul>
      <li>Its <strong>speed changes</strong></li>
      <li>Its <strong>wavelength changes</strong></li>
      <li>Its <strong>frequency stays the same</strong></li>
    </ul>
  </div>

  <div class="definition-block">
    <h4>📐 Why Refraction Happens:</h4>
    <ul>
      <li>EM waves travel at different speeds in different materials</li>
      <li>When speed changes at an angle, the wave changes direction → refraction</li>
    </ul>
  </div>

  <!-- Refraction Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>📐 Light Refraction at a Boundary</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="350" height="200" viewBox="0 0 350 200">
        <!-- Air region -->
        <rect x="30" y="20" width="290" height="80" fill="hsl(var(--background))" stroke="none"/>
        <text x="50" y="50" fill="currentColor" font-size="10">Air (less dense)</text>
        
        <!-- Glass region -->
        <rect x="30" y="100" width="290" height="80" fill="hsl(var(--primary)/0.1)" stroke="none"/>
        <text x="50" y="165" fill="currentColor" font-size="10">Glass (denser)</text>
        
        <!-- Boundary -->
        <line x1="30" y1="100" x2="320" y2="100" stroke="currentColor" stroke-width="2"/>
        
        <!-- Normal -->
        <line x1="175" y1="30" x2="175" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="5,5"/>
        <text x="185" y="40" fill="currentColor" font-size="9">Normal</text>
        
        <!-- Incident ray -->
        <line x1="100" y1="30" x2="175" y2="100" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrowIncRef)"/>
        <text x="105" y="55" fill="#3b82f6" font-size="9">Incident ray</text>
        
        <!-- Refracted ray (bends towards normal) -->
        <line x1="175" y1="100" x2="230" y2="170" stroke="#22c55e" stroke-width="2" marker-end="url(#arrowRefRef)"/>
        <text x="215" y="150" fill="#22c55e" font-size="9">Refracted ray</text>
        
        <!-- Angle markers -->
        <path d="M175 70 A30 30 0 0 0 150 90" fill="none" stroke="#3b82f6" stroke-width="2"/>
        <text x="145" y="75" fill="#3b82f6" font-size="10" font-weight="bold">i</text>
        
        <path d="M175 130 A30 30 0 0 1 195 118" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="195" y="135" fill="#22c55e" font-size="10" font-weight="bold">r</text>
        
        <!-- Key -->
        <text x="280" y="50" fill="#3b82f6" font-size="9">Speed ↑</text>
        <text x="280" y="65" fill="#3b82f6" font-size="9">λ longer</text>
        <text x="280" y="130" fill="#22c55e" font-size="9">Speed ↓</text>
        <text x="280" y="145" fill="#22c55e" font-size="9">λ shorter</text>
        
        <defs>
          <marker id="arrowIncRef" markerWidth="8" markerHeight="6" refX="0" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#3b82f6"/>
          </marker>
          <marker id="arrowRefRef" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#22c55e"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Entering…</th><th>What Happens</th><th>Ray Behaviour</th></tr></thead>
    <tbody>
      <tr><td>Denser medium</td><td>Speed ↓, wavelength ↓</td><td>Bends towards normal</td></tr>
      <tr><td>Less dense medium</td><td>Speed ↑, wavelength ↑</td><td>Bends away from normal</td></tr>
    </tbody>
  </table>

  <div class="key-facts-block">
    <h4>🔑 Remember:</h4>
    <p><strong>Frequency never changes</strong> because it is set by the original wave source.</p>
  </div>
</div>
            \`,
            canonical_keywords: ["electromagnetic waves", "refraction", "absorption", "transmission", "reflection", "wavelength", "frequency", "speed"],
            practice_items: [
              {
                id: "p1",
                prompt_template: "Explain what happens to the speed, wavelength and frequency of light when it enters glass from air.",
                marks: 4,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["speed decreases", "wavelength decreases", "frequency same", "denser"]
              },
              {
                id: "p2",
                prompt_template: "Explain why light bends towards the normal when entering a denser medium.",
                marks: 3,
                type: "short-answer",
                difficulty: "medium",
                randomise: true,
                expected_keywords: ["speed", "slows down", "denser", "towards normal"]
              }
            ]
          }
        ]
      }
    ],
    subsections: []
  },
  {
    id: "magnetism",
    title: "Magnetism and Electromagnetism",
    status: "coming_soon",
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
