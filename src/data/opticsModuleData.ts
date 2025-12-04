// Optics Module Data - Structured by AQA GCSE Physics Specification
// 4.6.2.5 Lenses, 4.6.2.6 Visible Light, 4.6.3.1 Infrared Radiation, 4.6.3.2 Perfect Black Bodies

export interface OpticsPracticeItem {
  id: string;
  prompt_template: string;
  marks: number;
  type: "open" | "short-answer" | "mcq";
  difficulty: "easy" | "medium" | "hard";
  randomise: boolean;
  expected_keywords: string[];
}

export interface OpticsSubsection {
  id: string;
  title: string;
  type: "content" | "practice-group";
  content_html: string;
  canonical_keywords: string[];
  practice_items: OpticsPracticeItem[];
  study_group?: number;
  pair_title?: string; // Title for the pair selector
}

export interface OpticsSection {
  id: string;
  spec_number: string;
  title: string;
  subsections: OpticsSubsection[];
}

export interface OpticsModule {
  id: string;
  title: string;
  status: "ready" | "coming_soon";
  sections: OpticsSection[];
}

// Helper to get all subsections flat for backwards compatibility
export const getOpticsSubsections = (module: OpticsModule): OpticsSubsection[] => {
  return module.sections.flatMap(section => section.subsections);
};

export const opticsModuleData: OpticsModule = {
  id: "optics-module",
  title: "Module 3: Optics",
  status: "ready",
  sections: [
    // ============================================
    // SECTION 1: 4.6.2.5 – LENSES
    // ============================================
    {
      id: "4-6-2-5-lenses",
      spec_number: "4.6.2.5",
      title: "Lenses",
      subsections: [
        // PAIR 1: What a Lens Does & Types of Lenses
        {
          id: "4-6-2-5-lenses-intro",
          title: "What a Lens Does",
          pair_title: "Lens Basics",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">What a Lens Does</h3>
  
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>A <strong>lens</strong> forms an image by <strong>refracting light</strong> — bending rays as they pass from one transparent material to another. The amount of bending depends on the shape of the lens and the angle at which light enters.</p>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔑 Key Idea:</h4>
    <p>Lenses control light so that rays <strong>meet (converge)</strong> or <strong>spread out (diverge)</strong>, creating an image that can be magnified, reduced, real, or virtual.</p>
  </div>

  <!-- Animated Lens Light Control Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>How Lenses Control Light (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="220" viewBox="0 0 500 220">
        <!-- Background -->
        <rect x="0" y="0" width="500" height="220" fill="none"/>
        
        <!-- CONVERGING LENS SECTION -->
        <text x="125" y="22" fill="#3b82f6" font-size="13" text-anchor="middle" font-weight="bold">Converging (Convex)</text>
        
        <!-- Principal axis left -->
        <line x1="20" y1="110" x2="230" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Convex lens shape - proper biconvex -->
        <ellipse cx="125" cy="110" rx="12" ry="55" fill="hsl(var(--primary)/0.2)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- F markers on both sides -->
        <circle cx="75" cy="110" r="4" fill="#ef4444"/>
        <text x="75" y="135" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="175" cy="110" r="4" fill="#ef4444"/>
        <text x="175" y="135" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        
        <!-- Incoming parallel rays (yellow/orange) -->
        <line x1="25" y1="65" x2="113" y2="65" stroke="#f59e0b" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="25" y1="110" x2="113" y2="110" stroke="#f59e0b" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="25" y1="155" x2="113" y2="155" stroke="#f59e0b" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Converging rays after lens (green) - all meet at F -->
        <line x1="137" y1="65" x2="175" y2="110" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="137" y1="110" x2="175" y2="110" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="137" y1="155" x2="175" y2="110" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Focus point glow -->
        <circle cx="175" cy="110" r="6" fill="#ef4444" opacity="0.3">
          <animate attributeName="r" values="6;10;6" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        
        <text x="125" y="175" fill="currentColor" font-size="9" text-anchor="middle">Rays converge at focus</text>
        
        <!-- DIVERGING LENS SECTION -->
        <text x="375" y="22" fill="#ec4899" font-size="13" text-anchor="middle" font-weight="bold">Diverging (Concave)</text>
        
        <!-- Principal axis right -->
        <line x1="270" y1="110" x2="480" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Concave lens shape - proper biconcave -->
        <path d="M363 55 Q378 110 363 165" fill="none" stroke="#ec4899" stroke-width="2.5"/>
        <path d="M387 55 Q372 110 387 165" fill="none" stroke="#ec4899" stroke-width="2.5"/>
        <line x1="363" y1="55" x2="387" y2="55" stroke="#ec4899" stroke-width="2.5"/>
        <line x1="363" y1="165" x2="387" y2="165" stroke="#ec4899" stroke-width="2.5"/>
        <rect x="363" y="55" width="24" height="110" fill="hsl(var(--primary)/0.08)"/>
        
        <!-- Virtual F marker (behind lens) -->
        <circle cx="325" cy="110" r="4" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="325" y="135" fill="#ef4444" font-size="9" text-anchor="middle">F (virtual)</text>
        
        <!-- Incoming parallel rays -->
        <line x1="280" y1="65" x2="363" y2="65" stroke="#f59e0b" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="280" y1="110" x2="363" y2="110" stroke="#f59e0b" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="280" y1="155" x2="363" y2="155" stroke="#f59e0b" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Diverging rays after lens (purple) -->
        <line x1="387" y1="65" x2="465" y2="35" stroke="#8b5cf6" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="387" y1="110" x2="465" y2="110" stroke="#8b5cf6" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="387" y1="155" x2="465" y2="185" stroke="#8b5cf6" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Virtual rays traced back (dashed) -->
        <line x1="387" y1="65" x2="325" y2="110" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5"/>
        <line x1="387" y1="155" x2="325" y2="110" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5"/>
        
        <text x="375" y="175" fill="currentColor" font-size="9" text-anchor="middle">Rays appear to come from F</text>
        
        <!-- Legend -->
        <rect x="140" y="190" width="220" height="25" fill="hsl(var(--muted)/0.4)" rx="4"/>
        <rect x="150" y="200" width="15" height="3" fill="#f59e0b"/>
        <text x="170" y="205" fill="currentColor" font-size="8">Parallel rays</text>
        <rect x="230" y="200" width="15" height="3" fill="#22c55e"/>
        <text x="250" y="205" fill="currentColor" font-size="8">Converge</text>
        <rect x="300" y="200" width="15" height="3" fill="#8b5cf6"/>
        <text x="320" y="205" fill="currentColor" font-size="8">Diverge</text>
      </svg>
    </div>
  </div>

  <div class="example-block">
    <h4>📚 Applications:</h4>
    <p>This allows lenses to be used in <strong>glasses, cameras, microscopes, projectors, and magnifying glasses</strong>.</p>
  </div>
</div>
          `,
          canonical_keywords: ["lens", "refraction", "converge", "diverge", "image", "magnified", "real", "virtual"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Explain what a lens does and how it forms an image.",
              marks: 3,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["refract", "light", "converge", "diverge", "image"]
            }
          ]
        },
        {
          id: "4-6-2-5-lens-types",
          title: "Types of Lenses",
          pair_title: "Lens Basics",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Types of Lenses</h3>
  
  <div class="definition-block" style="border-left: 4px solid #3b82f6;">
    <h4>🔵 Convex Lens (Converging Lens)</h4>
    <ul>
      <li><strong>Thicker in the middle</strong>, thinner at the edges</li>
      <li>Makes parallel rays of light <strong>converge</strong> (come together)</li>
      <li>Creates a <strong>principal focus</strong>, where these rays meet</li>
      <li>The <strong>focal length</strong> is the distance from the centre of the lens to the principal focus</li>
      <li>A more strongly curved convex lens bends light more sharply → <strong>shorter focal length</strong></li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #ec4899; margin-top: 1rem;">
    <h4>🔴 Concave Lens (Diverging Lens)</h4>
    <ul>
      <li><strong>Thinner in the middle</strong>, thicker at the edges</li>
      <li>Makes parallel rays of light <strong>diverge</strong> (spread out)</li>
      <li>Rays appear to come from a <strong>virtual focus</strong> behind the lens</li>
      <li>Concave lenses <strong>always</strong> produce a <strong>virtual, upright, smaller</strong> image regardless of object position</li>
    </ul>
  </div>

  <!-- Lens Shapes Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Lens Shapes & Diagram Symbols</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="480" height="240" viewBox="0 0 480 240">
        <!-- CONVEX LENS -->
        <text x="120" y="25" fill="#3b82f6" font-size="14" text-anchor="middle" font-weight="bold">Convex (Converging)</text>
        
        <!-- Physical convex lens shape -->
        <ellipse cx="70" cy="120" rx="22" ry="60" fill="hsl(var(--primary)/0.15)" stroke="#3b82f6" stroke-width="3"/>
        <text x="70" y="200" fill="currentColor" font-size="10" text-anchor="middle">Physical shape</text>
        
        <!-- Arrows showing thicker middle -->
        <path d="M40 90 L30 120 L40 150" fill="none" stroke="#22c55e" stroke-width="2"/>
        <text x="20" y="120" fill="#22c55e" font-size="9" text-anchor="end">Thick</text>
        
        <!-- Convex lens diagram symbol -->
        <line x1="160" y1="60" x2="160" y2="180" stroke="#3b82f6" stroke-width="3"/>
        <polygon points="160,60 148,75 172,75" fill="#3b82f6"/>
        <polygon points="160,180 148,165 172,165" fill="#3b82f6"/>
        <text x="160" y="210" fill="currentColor" font-size="10" text-anchor="middle">Diagram symbol</text>

        <!-- CONCAVE LENS -->
        <text x="360" y="25" fill="#ec4899" font-size="14" text-anchor="middle" font-weight="bold">Concave (Diverging)</text>
        
        <!-- Physical concave lens shape -->
        <path d="M290 60 Q320 120 290 180" fill="none" stroke="#ec4899" stroke-width="3"/>
        <path d="M340 60 Q310 120 340 180" fill="none" stroke="#ec4899" stroke-width="3"/>
        <line x1="290" y1="60" x2="340" y2="60" stroke="#ec4899" stroke-width="3"/>
        <line x1="290" y1="180" x2="340" y2="180" stroke="#ec4899" stroke-width="3"/>
        <rect x="290" y="60" width="50" height="120" fill="hsl(var(--primary)/0.08)"/>
        <text x="315" y="200" fill="currentColor" font-size="10" text-anchor="middle">Physical shape</text>
        
        <!-- Arrows showing thin middle -->
        <path d="M300 90 L310 120 L300 150" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="280" y="120" fill="#f59e0b" font-size="9" text-anchor="end">Thin</text>
        
        <!-- Concave lens diagram symbol -->
        <line x1="410" y1="60" x2="410" y2="180" stroke="#ec4899" stroke-width="3"/>
        <polygon points="410,60 398,75 422,75" fill="#ec4899" transform="rotate(180,410,67.5)"/>
        <polygon points="410,180 398,165 422,165" fill="#ec4899" transform="rotate(180,410,172.5)"/>
        <text x="410" y="210" fill="currentColor" font-size="10" text-anchor="middle">Diagram symbol</text>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Convex Lens</th><th>Concave Lens</th></tr></thead>
    <tbody>
      <tr><td>Shape</td><td>Thicker in middle</td><td>Thinner in middle</td></tr>
      <tr><td>Effect on light</td><td>Converges rays</td><td>Diverges rays</td></tr>
      <tr><td>Focus type</td><td>Real focus</td><td>Virtual focus</td></tr>
      <tr><td>Image types possible</td><td>Real or virtual</td><td>Always virtual</td></tr>
      <tr><td>Uses</td><td>Magnifying glass, camera</td><td>Spectacles (short-sightedness)</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["convex lens", "concave lens", "converging", "diverging", "principal focus", "focal length", "thicker", "thinner"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Describe the differences between a convex and concave lens in terms of shape and how they affect light.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["convex", "concave", "converge", "diverge", "thicker middle", "thinner middle"]
            }
          ]
        },
        // PAIR 2: Principal Focus & Focal Length, Real and Virtual Images
        {
          id: "4-6-2-5-focal-length",
          title: "Principal Focus & Focal Length",
          pair_title: "Focus & Image Types",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Principal Focus & Focal Length</h3>
  
  <div class="definition-block">
    <h4>🎯 Principal Focus (F):</h4>
    <ul>
      <li><strong>Convex lens:</strong> where parallel rays <strong>actually meet</strong></li>
      <li><strong>Concave lens:</strong> where rays <strong>appear to come from</strong> when traced back</li>
    </ul>
  </div>

  <div class="definition-block" style="margin-top: 1rem;">
    <h4>📏 Focal Length (f):</h4>
    <ul>
      <li>Distance between the <strong>centre of the lens</strong> and the <strong>principal focus</strong></li>
      <li><strong>Shorter focal length → stronger bending</strong> of light</li>
      <li>Important in determining how large or small the image becomes</li>
    </ul>
  </div>

  <!-- Focal Length Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Principal Focus and Focal Length (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <!-- Principal axis -->
        <line x1="20" y1="100" x2="480" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        
        <!-- Convex lens -->
        <ellipse cx="150" cy="100" rx="10" ry="55" fill="hsl(var(--primary)/0.2)" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="150" y="175" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">Convex Lens</text>
        
        <!-- Parallel rays coming in -->
        <line x1="30" y1="55" x2="140" y2="55" stroke="#f59e0b" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="30" y1="100" x2="140" y2="100" stroke="#f59e0b" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="30" y1="145" x2="140" y2="145" stroke="#f59e0b" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Rays converging to focus -->
        <line x1="160" y1="55" x2="230" y2="100" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="160" y1="100" x2="230" y2="100" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="160" y1="145" x2="230" y2="100" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Principal focus point -->
        <circle cx="230" cy="100" r="6" fill="#ef4444">
          <animate attributeName="r" values="6;8;6" dur="1s" repeatCount="indefinite"/>
        </circle>
        <text x="230" y="130" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">F</text>
        <text x="230" y="145" fill="#ef4444" font-size="9" text-anchor="middle">(Principal Focus)</text>
        
        <!-- Focal length indicator -->
        <line x1="150" y1="65" x2="230" y2="65" stroke="#ec4899" stroke-width="2.5"/>
        <line x1="150" y1="58" x2="150" y2="72" stroke="#ec4899" stroke-width="2.5"/>
        <line x1="230" y1="58" x2="230" y2="72" stroke="#ec4899" stroke-width="2.5"/>
        <text x="190" y="55" fill="#ec4899" font-size="12" text-anchor="middle" font-weight="bold">f (Focal Length)</text>
        
        <!-- Centre of lens marker -->
        <circle cx="150" cy="100" r="4" fill="#3b82f6"/>
        <text x="150" y="190" fill="currentColor" font-size="9" text-anchor="middle">Centre (C)</text>
        
        <!-- Comparison: Stronger lens -->
        <text x="390" y="35" fill="#8b5cf6" font-size="12" text-anchor="middle" font-weight="bold">Stronger Lens</text>
        <text x="390" y="50" fill="currentColor" font-size="9" text-anchor="middle">(more curved)</text>
        <ellipse cx="390" cy="100" rx="14" ry="45" fill="hsl(var(--primary)/0.2)" stroke="#8b5cf6" stroke-width="2"/>
        
        <!-- Shorter focal length demonstration -->
        <line x1="310" y1="75" x2="376" y2="75" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="404" y1="75" x2="430" y2="100" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="310" y1="100" x2="376" y2="100" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="404" y1="100" x2="430" y2="100" stroke="#22c55e" stroke-width="1.5"/>
        <line x1="310" y1="125" x2="376" y2="125" stroke="#f59e0b" stroke-width="1.5"/>
        <line x1="404" y1="125" x2="430" y2="100" stroke="#22c55e" stroke-width="1.5"/>
        
        <circle cx="430" cy="100" r="5" fill="#ef4444"/>
        <text x="430" y="125" fill="#ef4444" font-size="10" text-anchor="middle">F</text>
        
        <line x1="390" y1="145" x2="430" y2="145" stroke="#ec4899" stroke-width="1.5"/>
        <text x="410" y="160" fill="#ec4899" font-size="9" text-anchor="middle">Shorter f</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.9rem; color: var(--muted-foreground);"><strong>More curved lens = shorter focal length = stronger bending</strong></p>
  </div>

  <div class="key-idea-block">
    <h4>💡 Understanding Focal Length:</h4>
    <p>Understanding focal length allows you to <strong>predict whether the image will be magnified or diminished</strong>. Lenses with shorter focal lengths produce more magnification for close objects.</p>
  </div>
</div>
          `,
          canonical_keywords: ["principal focus", "focal length", "F", "f", "converge", "diverge", "centre of lens"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Define focal length and explain how it relates to the strength of a lens.",
              marks: 3,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["focal length", "distance", "principal focus", "shorter", "stronger"]
            }
          ]
        },
        {
          id: "4-6-2-5-real-virtual-images",
          title: "Real and Virtual Images",
          pair_title: "Focus & Image Types",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Real and Virtual Images</h3>
  
  <div class="definition-block" style="border-left: 4px solid #22c55e;">
    <h4>🟢 Real Image</h4>
    <ul>
      <li>Formed when light rays <strong>actually meet</strong> after passing through the lens</li>
      <li><strong>Can be projected</strong> onto a screen</li>
      <li>Always <strong>inverted</strong> compared to the object</li>
      <li>Formed by convex lenses when the object is placed <strong>beyond the focal length</strong></li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #f59e0b; margin-top: 1rem;">
    <h4>🟡 Virtual Image</h4>
    <ul>
      <li>Formed when rays <strong>do not meet</strong>, but appear to meet when traced backwards</li>
      <li><strong>Cannot be projected</strong> onto a screen</li>
      <li>Always <strong>upright</strong></li>
      <li>Formed by:
        <ul>
          <li>Concave lenses (always)</li>
          <li>Convex lenses when object is inside the focal length</li>
        </ul>
      </li>
    </ul>
  </div>

  <!-- ACCURATE Real vs Virtual Image Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; background: linear-gradient(135deg, hsl(45 100% 96%), hsl(30 100% 95%));">
    <h4 style="color: #ea580c;">Real vs Virtual Images (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="560" height="280" viewBox="0 0 560 280">
        <!-- ========== REAL IMAGE SECTION (Left) ========== -->
        <text x="140" y="25" fill="#22c55e" font-size="14" text-anchor="middle" font-weight="bold">REAL IMAGE</text>
        
        <!-- Principal axis -->
        <line x1="15" y1="140" x2="265" y2="140" stroke="#666" stroke-width="1" stroke-dasharray="4,4"/>
        
        <!-- Convex lens at x=140 -->
        <ellipse cx="140" cy="140" rx="8" ry="50" fill="hsl(200 80% 85%/0.6)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- F and 2F markers - LEFT SIDE -->
        <circle cx="90" cy="140" r="4" fill="#ef4444"/>
        <text x="90" y="160" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        
        <!-- F and 2F markers - RIGHT SIDE -->
        <circle cx="190" cy="140" r="4" fill="#ef4444"/>
        <text x="190" y="160" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        
        <!-- Object arrow (beyond F, at x=55) - ORANGE -->
        <line x1="55" y1="140" x2="55" y2="85" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="55,80 50,92 60,92" fill="#f59e0b"/>
        <text x="55" y="175" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- RAY 1: Parallel ray from top of object → through F after lens -->
        <!-- Goes horizontal to lens, then bends through F -->
        <line x1="55" y1="85" x2="140" y2="85" stroke="#3b82f6" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="140" y1="85" x2="235" y2="195" stroke="#3b82f6" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- RAY 2: Through centre of lens (straight through) -->
        <line x1="55" y1="85" x2="235" y2="195" stroke="#ec4899" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Real image (inverted arrow at x=235) - GREEN -->
        <line x1="235" y1="140" x2="235" y2="195" stroke="#22c55e" stroke-width="4"/>
        <polygon points="235,200 230,188 240,188" fill="#22c55e"/>
        <text x="235" y="225" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">Real Image</text>
        <text x="235" y="238" fill="#22c55e" font-size="8" text-anchor="middle">(inverted)</text>
        
        <!-- Screen -->
        <rect x="250" y="105" width="10" height="90" fill="hsl(var(--muted))" stroke="#888" stroke-width="1"/>
        <text x="255" y="215" fill="currentColor" font-size="8" transform="rotate(90,255,215)">Screen</text>
        
        <!-- Checkmark indicator -->
        <text x="235" y="255" fill="#22c55e" font-size="10" text-anchor="middle">✓ Can project on screen</text>
        
        <!-- ========== VIRTUAL IMAGE SECTION (Right) ========== -->
        <text x="420" y="25" fill="#f59e0b" font-size="14" text-anchor="middle" font-weight="bold">VIRTUAL IMAGE</text>
        
        <!-- Principal axis -->
        <line x1="295" y1="140" x2="545" y2="140" stroke="#666" stroke-width="1" stroke-dasharray="4,4"/>
        
        <!-- Convex lens at x=420 -->
        <ellipse cx="420" cy="140" rx="8" ry="50" fill="hsl(200 80% 85%/0.6)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- F markers -->
        <circle cx="370" cy="140" r="4" fill="#ef4444"/>
        <text x="370" y="160" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="470" cy="140" r="4" fill="#ef4444"/>
        <text x="470" y="160" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        
        <!-- Object arrow (inside F, at x=395) - ORANGE -->
        <line x1="395" y1="140" x2="395" y2="95" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="395,90 390,102 400,102" fill="#f59e0b"/>
        <text x="395" y="175" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Object</text>
        <text x="395" y="187" fill="#f59e0b" font-size="7" text-anchor="middle">(inside F)</text>
        
        <!-- RAY 1: Parallel ray from top of object → diverges after lens as if from F -->
        <line x1="395" y1="95" x2="420" y2="95" stroke="#3b82f6" stroke-width="2"/>
        <line x1="420" y1="95" x2="520" y2="70" stroke="#3b82f6" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- RAY 2: Through centre of lens (continues straight) -->
        <line x1="395" y1="95" x2="520" y2="115" stroke="#ec4899" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Virtual rays traced back (dashed) - meet at virtual image location -->
        <line x1="420" y1="95" x2="320" y2="55" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.6"/>
        <line x1="420" y1="105" x2="320" y2="55" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.6"/>
        
        <!-- Virtual image (upright, magnified arrow) - dashed ORANGE -->
        <line x1="320" y1="140" x2="320" y2="55" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4"/>
        <polygon points="320,50 315,62 325,62" fill="#f59e0b" opacity="0.7"/>
        <text x="320" y="215" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Virtual Image</text>
        <text x="320" y="228" fill="#f59e0b" font-size="8" text-anchor="middle">(upright, magnified)</text>
        
        <!-- X indicator -->
        <text x="420" y="255" fill="#ef4444" font-size="10" text-anchor="middle">✗ Cannot project on screen</text>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Real Image</th><th>Virtual Image</th></tr></thead>
    <tbody>
      <tr><td>Rays</td><td>Actually meet</td><td>Appear to meet (traced back)</td></tr>
      <tr><td>Projection</td><td>Can be projected on screen</td><td>Cannot be projected</td></tr>
      <tr><td>Orientation</td><td>Inverted (upside down)</td><td>Upright (same way up)</td></tr>
      <tr><td>Formed by</td><td>Convex lens (object beyond F)</td><td>Concave lens OR convex (object inside F)</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["real image", "virtual image", "inverted", "upright", "projected", "screen", "traced back"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Explain the difference between a real and virtual image.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["real", "rays meet", "projected", "inverted", "virtual", "appear to meet", "upright"]
            },
            {
              id: "p2",
              prompt_template: "State two ways a virtual image can be produced by lenses.",
              marks: 2,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["concave lens", "convex", "inside focal length"]
            }
          ]
        },
        // PAIR 3: Ray Diagrams Convex Lens
        {
          id: "4-6-2-5-ray-diagrams-convex",
          title: "Ray Diagrams: Convex Lens",
          pair_title: "Convex Lens Ray Diagrams",
          type: "content",
          study_group: 3,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Ray Diagrams: Convex Lens</h3>
  
  <div class="key-idea-block">
    <h4>📐 Ray Diagrams:</h4>
    <p>Ray diagrams allow you to see exactly <strong>where the image forms</strong> and <strong>what its properties are</strong>.</p>
  </div>

  <div class="definition-block">
    <h4>Three Key Rays You Always Draw:</h4>
    <ol>
      <li><strong style="color: #22c55e;">Ray parallel to the principal axis</strong> → refracts through the principal focus (F)</li>
      <li><strong style="color: #3b82f6;">Ray through the centre of the lens</strong> → passes straight through without bending</li>
      <li><strong style="color: #ec4899;">Ray through the focal point</strong> (before reaching the lens) → refracts parallel to the axis</li>
    </ol>
  </div>

  <!-- ACCURATE 3 Construction Rays Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; background: linear-gradient(135deg, hsl(45 100% 96%), hsl(30 100% 95%));">
    <h4 style="color: #ea580c;">The Three Construction Rays (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="540" height="260" viewBox="0 0 540 260">
        <!-- Principal axis -->
        <line x1="20" y1="130" x2="520" y2="130" stroke="#666" stroke-width="1" stroke-dasharray="4,4"/>
        <text x="510" y="145" fill="#666" font-size="8">axis</text>
        
        <!-- Lens at x=220 -->
        <ellipse cx="220" cy="130" rx="10" ry="70" fill="hsl(200 80% 85%/0.6)" stroke="#3b82f6" stroke-width="3"/>
        
        <!-- 2F and F markers on BOTH sides -->
        <circle cx="120" cy="130" r="5" fill="#8b5cf6"/>
        <text x="120" y="155" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">2F</text>
        
        <circle cx="170" cy="130" r="5" fill="#ef4444"/>
        <text x="170" y="155" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        
        <circle cx="270" cy="130" r="5" fill="#ef4444"/>
        <text x="270" y="155" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        
        <circle cx="320" cy="130" r="5" fill="#8b5cf6"/>
        <text x="320" y="155" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- Object at x=80 (beyond 2F) - height 60px -->
        <line x1="80" y1="130" x2="80" y2="55" stroke="#f59e0b" stroke-width="5"/>
        <polygon points="80,48 73,62 87,62" fill="#f59e0b"/>
        <text x="80" y="175" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">OBJECT</text>
        
        <!-- RAY 1 (GREEN): Parallel to axis → through F after lens -->
        <line x1="80" y1="55" x2="220" y2="55" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <!-- This ray goes through F (270,130) and continues to image -->
        <line x1="220" y1="55" x2="400" y2="205" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- RAY 2 (BLUE): Through centre - straight through -->
        <line x1="80" y1="55" x2="400" y2="205" stroke="#3b82f6" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- RAY 3 (PINK): Through F before lens → parallel after -->
        <!-- Goes from object through F (170,130), but we trace from top of object -->
        <line x1="80" y1="55" x2="170" y2="105" stroke="#ec4899" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <!-- After lens, parallel to axis -->
        <line x1="220" y1="90" x2="400" y2="90" stroke="#ec4899" stroke-width="2.5" stroke-dasharray="4,3">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Image (where rays meet) at approximately x=350 -->
        <line x1="350" y1="130" x2="350" y2="185" stroke="#22c55e" stroke-width="4"/>
        <polygon points="350,192 343,178 357,178" fill="#22c55e"/>
        <text x="350" y="215" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">IMAGE</text>
        
        <!-- Numbered labels for rays -->
        <rect x="125" y="40" width="18" height="18" fill="#22c55e" rx="3"/>
        <text x="134" y="54" fill="white" font-size="11" text-anchor="middle" font-weight="bold">1</text>
        
        <rect x="165" y="75" width="18" height="18" fill="#3b82f6" rx="3"/>
        <text x="174" y="89" fill="white" font-size="11" text-anchor="middle" font-weight="bold">2</text>
        
        <rect x="115" y="90" width="18" height="18" fill="#ec4899" rx="3"/>
        <text x="124" y="104" fill="white" font-size="11" text-anchor="middle" font-weight="bold">3</text>
        
        <!-- Legend box -->
        <rect x="380" y="20" width="150" height="85" fill="hsl(var(--muted)/0.6)" rx="6" stroke="#ccc"/>
        <text x="455" y="38" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Ray Key:</text>
        <line x1="390" y1="52" x2="415" y2="52" stroke="#22c55e" stroke-width="3"/>
        <text x="420" y="56" fill="currentColor" font-size="9">1. Parallel → F</text>
        <line x1="390" y1="68" x2="415" y2="68" stroke="#3b82f6" stroke-width="3"/>
        <text x="420" y="72" fill="currentColor" font-size="9">2. Through centre</text>
        <line x1="390" y1="84" x2="415" y2="84" stroke="#ec4899" stroke-width="3"/>
        <text x="420" y="88" fill="currentColor" font-size="9">3. Through F → parallel</text>
      </svg>
    </div>
  </div>

  <div class="key-facts-block" style="margin-top: 1rem;">
    <h4>🎯 What Happens Depends on Object Position:</h4>
  </div>

  <!-- Object Beyond 2F - ACCURATE -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #22c55e; background: linear-gradient(135deg, hsl(45 100% 97%), hsl(30 100% 96%));">
    <h4 style="color: #16a34a;">Object Beyond 2F (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="480" height="180" viewBox="0 0 480 180">
        <!-- Axis -->
        <line x1="20" y1="90" x2="460" y2="90" stroke="#666" stroke-width="1" stroke-dasharray="3,3"/>
        
        <!-- Lens at x=200 -->
        <ellipse cx="200" cy="90" rx="8" ry="55" fill="hsl(200 80% 85%/0.5)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- Markers -->
        <circle cx="100" cy="90" r="4" fill="#8b5cf6"/>
        <text x="100" y="110" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        <circle cx="150" cy="90" r="4" fill="#ef4444"/>
        <text x="150" y="110" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="250" cy="90" r="4" fill="#ef4444"/>
        <text x="250" y="110" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="300" cy="90" r="4" fill="#8b5cf6"/>
        <text x="300" y="110" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- Object (beyond 2F at x=50) - tall -->
        <line x1="50" y1="90" x2="50" y2="35" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="50,30 45,42 55,42" fill="#f59e0b"/>
        <text x="50" y="125" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- Ray 1: Parallel then through F -->
        <line x1="50" y1="35" x2="200" y2="35" stroke="#22c55e" stroke-width="2"/>
        <line x1="200" y1="35" x2="285" y2="115" stroke="#22c55e" stroke-width="2"/>
        
        <!-- Ray 2: Through centre -->
        <line x1="50" y1="35" x2="285" y2="115" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Image (between F and 2F, smaller) -->
        <line x1="285" y1="90" x2="285" y2="115" stroke="#22c55e" stroke-width="3"/>
        <polygon points="285,120 281,110 289,110" fill="#22c55e"/>
        <text x="285" y="140" fill="#22c55e" font-size="9" text-anchor="middle" font-weight="bold">Image</text>
        
        <!-- Properties box -->
        <rect x="350" y="25" width="115" height="70" fill="hsl(var(--muted)/0.5)" rx="5" stroke="#ccc"/>
        <text x="407" y="43" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="407" y="58" fill="#22c55e" font-size="9" text-anchor="middle">✓ Real</text>
        <text x="407" y="72" fill="#22c55e" font-size="9" text-anchor="middle">✓ Inverted</text>
        <text x="407" y="86" fill="#22c55e" font-size="9" text-anchor="middle">✓ Smaller</text>
      </svg>
    </div>
  </div>

  <!-- Object at 2F - ACCURATE -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #3b82f6; background: linear-gradient(135deg, hsl(45 100% 97%), hsl(30 100% 96%));">
    <h4 style="color: #2563eb;">Object at 2F (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="480" height="180" viewBox="0 0 480 180">
        <!-- Axis -->
        <line x1="20" y1="90" x2="460" y2="90" stroke="#666" stroke-width="1" stroke-dasharray="3,3"/>
        
        <!-- Lens at x=200 -->
        <ellipse cx="200" cy="90" rx="8" ry="55" fill="hsl(200 80% 85%/0.5)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- Markers -->
        <circle cx="100" cy="90" r="4" fill="#8b5cf6"/>
        <text x="100" y="110" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        <circle cx="150" cy="90" r="4" fill="#ef4444"/>
        <text x="150" y="110" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="250" cy="90" r="4" fill="#ef4444"/>
        <text x="250" y="110" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="300" cy="90" r="4" fill="#8b5cf6"/>
        <text x="300" y="110" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- Object (at 2F, x=100) -->
        <line x1="100" y1="90" x2="100" y2="40" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="100,35 95,47 105,47" fill="#f59e0b"/>
        <text x="100" y="125" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- Ray 1: Parallel then through F -->
        <line x1="100" y1="40" x2="200" y2="40" stroke="#22c55e" stroke-width="2"/>
        <line x1="200" y1="40" x2="300" y2="140" stroke="#22c55e" stroke-width="2"/>
        
        <!-- Ray 2: Through centre -->
        <line x1="100" y1="40" x2="300" y2="140" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Image (at 2F on other side, SAME SIZE) -->
        <line x1="300" y1="90" x2="300" y2="140" stroke="#3b82f6" stroke-width="3"/>
        <polygon points="300,145 295,133 305,133" fill="#3b82f6"/>
        <text x="300" y="165" fill="#3b82f6" font-size="9" text-anchor="middle" font-weight="bold">Image</text>
        
        <!-- Properties box -->
        <rect x="350" y="25" width="115" height="70" fill="hsl(var(--muted)/0.5)" rx="5" stroke="#ccc"/>
        <text x="407" y="43" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="407" y="58" fill="#3b82f6" font-size="9" text-anchor="middle">✓ Real</text>
        <text x="407" y="72" fill="#3b82f6" font-size="9" text-anchor="middle">✓ Inverted</text>
        <text x="407" y="86" fill="#3b82f6" font-size="9" text-anchor="middle">✓ Same size</text>
      </svg>
    </div>
  </div>

  <!-- Object Between F and 2F - ACCURATE -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #8b5cf6; background: linear-gradient(135deg, hsl(45 100% 97%), hsl(30 100% 96%));">
    <h4 style="color: #7c3aed;">Object Between F and 2F (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="520" height="200" viewBox="0 0 520 200">
        <!-- Axis -->
        <line x1="20" y1="100" x2="500" y2="100" stroke="#666" stroke-width="1" stroke-dasharray="3,3"/>
        
        <!-- Lens at x=180 -->
        <ellipse cx="180" cy="100" rx="8" ry="55" fill="hsl(200 80% 85%/0.5)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- Markers -->
        <circle cx="80" cy="100" r="4" fill="#8b5cf6"/>
        <text x="80" y="120" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        <circle cx="130" cy="100" r="4" fill="#ef4444"/>
        <text x="130" y="120" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="230" cy="100" r="4" fill="#ef4444"/>
        <text x="230" y="120" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="280" cy="100" r="4" fill="#8b5cf6"/>
        <text x="280" y="120" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- Object (between F and 2F, at x=105) -->
        <line x1="105" y1="100" x2="105" y2="60" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="105,55 100,67 110,67" fill="#f59e0b"/>
        <text x="105" y="135" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- Ray 1: Parallel then through F -->
        <line x1="105" y1="60" x2="180" y2="60" stroke="#22c55e" stroke-width="2"/>
        <line x1="180" y1="60" x2="420" y2="185" stroke="#22c55e" stroke-width="2"/>
        
        <!-- Ray 2: Through centre -->
        <line x1="105" y1="60" x2="420" y2="165" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- Image (beyond 2F, MAGNIFIED) -->
        <line x1="390" y1="100" x2="390" y2="175" stroke="#8b5cf6" stroke-width="3"/>
        <polygon points="390,180 385,168 395,168" fill="#8b5cf6"/>
        <text x="390" y="195" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">Image</text>
        
        <!-- Properties box -->
        <rect x="420" y="35" width="90" height="70" fill="hsl(var(--muted)/0.5)" rx="5" stroke="#ccc"/>
        <text x="465" y="53" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="465" y="68" fill="#8b5cf6" font-size="9" text-anchor="middle">✓ Real</text>
        <text x="465" y="82" fill="#8b5cf6" font-size="9" text-anchor="middle">✓ Inverted</text>
        <text x="465" y="96" fill="#8b5cf6" font-size="9" text-anchor="middle">✓ Magnified</text>
      </svg>
    </div>
  </div>

  <!-- Object Inside F - ACCURATE (Magnifying Glass) -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; border-left: 4px solid #f59e0b; background: linear-gradient(135deg, hsl(45 100% 97%), hsl(30 100% 96%));">
    <h4 style="color: #ea580c;">Object Inside F - Magnifying Glass Effect (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="540" height="220" viewBox="0 0 540 220">
        <!-- Axis -->
        <line x1="20" y1="110" x2="520" y2="110" stroke="#666" stroke-width="1" stroke-dasharray="3,3"/>
        
        <!-- Lens at x=280 -->
        <ellipse cx="280" cy="110" rx="8" ry="55" fill="hsl(200 80% 85%/0.5)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- Markers -->
        <circle cx="180" cy="110" r="4" fill="#8b5cf6"/>
        <text x="180" y="130" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        <circle cx="230" cy="110" r="4" fill="#ef4444"/>
        <text x="230" y="130" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="330" cy="110" r="4" fill="#ef4444"/>
        <text x="330" y="130" fill="#ef4444" font-size="9" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="380" cy="110" r="4" fill="#8b5cf6"/>
        <text x="380" y="130" fill="#8b5cf6" font-size="9" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- Object (INSIDE F, at x=255) -->
        <line x1="255" y1="110" x2="255" y2="75" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="255,70 250,82 260,82" fill="#f59e0b"/>
        <text x="255" y="145" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- RAY 1: Parallel ray from top of object → diverges as if from F -->
        <line x1="255" y1="75" x2="280" y2="75" stroke="#22c55e" stroke-width="2"/>
        <line x1="280" y1="75" x2="470" y2="35" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- RAY 2: Through centre (straight) -->
        <line x1="255" y1="75" x2="470" y2="95" stroke="#3b82f6" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Virtual rays traced BACK (dashed) -->
        <line x1="280" y1="75" x2="100" y2="35" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.6"/>
        <line x1="280" y1="90" x2="100" y2="35" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.6"/>
        
        <!-- Virtual image (SAME SIDE as object, upright, magnified) - dashed -->
        <line x1="100" y1="110" x2="100" y2="35" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4"/>
        <polygon points="100,30 95,42 105,42" fill="#f59e0b" opacity="0.7"/>
        <text x="100" y="165" fill="#f59e0b" font-size="9" text-anchor="middle" font-weight="bold">Virtual Image</text>
        <text x="100" y="180" fill="#f59e0b" font-size="8" text-anchor="middle">(Magnified)</text>
        
        <!-- Properties box -->
        <rect x="390" y="140" width="130" height="70" fill="hsl(var(--muted)/0.5)" rx="5" stroke="#ccc"/>
        <text x="455" y="158" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="455" y="173" fill="#f59e0b" font-size="9" text-anchor="middle">✓ Virtual</text>
        <text x="455" y="187" fill="#f59e0b" font-size="9" text-anchor="middle">✓ Upright</text>
        <text x="455" y="201" fill="#f59e0b" font-size="9" text-anchor="middle">✓ Magnified</text>
        
        <!-- Magnifying glass note -->
        <text x="455" y="60" fill="#ea580c" font-size="10" text-anchor="middle">🔍 This is how</text>
        <text x="455" y="75" fill="#ea580c" font-size="10" text-anchor="middle">magnifying glasses work!</text>
      </svg>
    </div>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Object Position</th><th>Image Position</th><th>Image Properties</th></tr></thead>
    <tbody>
      <tr><td>Beyond 2F</td><td>Between F and 2F</td><td>Real, inverted, smaller</td></tr>
      <tr><td>At 2F</td><td>At 2F</td><td>Real, inverted, same size</td></tr>
      <tr><td>Between F and 2F</td><td>Beyond 2F</td><td>Real, inverted, magnified</td></tr>
      <tr><td>Inside F</td><td>Same side as object</td><td>Virtual, upright, magnified</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["ray diagram", "convex lens", "2F", "F", "principal axis", "parallel", "centre", "focal point", "magnified", "inverted"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Describe the three rays used to construct a ray diagram for a convex lens.",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["parallel", "through focus", "through centre", "straight"]
            },
            {
              id: "p2",
              prompt_template: "An object is placed between F and 2F of a convex lens. Describe the image formed.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["real", "inverted", "magnified", "beyond 2F"]
            },
            {
              id: "p3",
              prompt_template: "Explain how a magnifying glass works using your knowledge of convex lenses.",
              marks: 4,
              type: "short-answer",
              difficulty: "hard",
              randomise: true,
              expected_keywords: ["convex", "inside focal length", "virtual", "upright", "magnified"]
            }
          ]
        },
        // PAIR 4: Ray Diagrams Concave Lens & Magnification
        {
          id: "4-6-2-5-ray-diagrams-concave",
          title: "Ray Diagrams: Concave Lens",
          pair_title: "Concave Lens & Magnification",
          type: "content",
          study_group: 4,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Ray Diagrams: Concave Lens</h3>
  
  <div class="key-idea-block">
    <h4>📐 Concave Lens Behaviour:</h4>
    <p>Concave lenses behave <strong>much more simply</strong> than convex lenses. The image is <strong>always the same type</strong> regardless of object position.</p>
  </div>

  <div class="definition-block">
    <h4>Two Main Rays:</h4>
    <ol>
      <li><strong style="color: #22c55e;">A ray parallel to the axis</strong> → refracts as if coming from the virtual focus behind the lens</li>
      <li><strong style="color: #3b82f6;">A ray through the centre</strong> → continues straight through</li>
    </ol>
  </div>

  <!-- ACCURATE Concave Lens Ray Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; background: linear-gradient(135deg, hsl(45 100% 97%), hsl(30 100% 96%));">
    <h4 style="color: #ea580c;">Concave Lens Ray Diagram (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="540" height="240" viewBox="0 0 540 240">
        <!-- Principal axis -->
        <line x1="20" y1="120" x2="520" y2="120" stroke="#666" stroke-width="1" stroke-dasharray="4,4"/>
        
        <!-- Concave lens at x=280 -->
        <path d="M268 55 Q290 120 268 185" fill="none" stroke="#ec4899" stroke-width="3"/>
        <path d="M292 55 Q270 120 292 185" fill="none" stroke="#ec4899" stroke-width="3"/>
        <line x1="268" y1="55" x2="292" y2="55" stroke="#ec4899" stroke-width="3"/>
        <line x1="268" y1="185" x2="292" y2="185" stroke="#ec4899" stroke-width="3"/>
        <rect x="268" y="55" width="24" height="130" fill="hsl(var(--primary)/0.08)"/>
        
        <!-- Virtual focus (behind lens) markers -->
        <circle cx="220" cy="120" r="5" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3"/>
        <text x="220" y="145" fill="#ef4444" font-size="10" text-anchor="middle">F (virtual)</text>
        <circle cx="340" cy="120" r="5" fill="#ef4444"/>
        <text x="340" y="145" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        
        <!-- Object at x=100 -->
        <line x1="100" y1="120" x2="100" y2="60" stroke="#f59e0b" stroke-width="5"/>
        <polygon points="100,53 93,67 107,67" fill="#f59e0b"/>
        <text x="100" y="155" fill="#f59e0b" font-size="11" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- RAY 1 (GREEN): Parallel to axis → diverges as if from virtual F -->
        <line x1="100" y1="60" x2="268" y2="60" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="292" y1="60" x2="480" y2="25" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        <!-- Traced back to virtual F -->
        <line x1="292" y1="60" x2="220" y2="120" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5"/>
        
        <!-- RAY 2 (BLUE): Through centre (straight) -->
        <line x1="100" y1="60" x2="480" y2="175" stroke="#3b82f6" stroke-width="2.5">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Virtual image (where traced rays appear to meet) - same side as object -->
        <line x1="175" y1="120" x2="175" y2="85" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4"/>
        <polygon points="175,80 170,92 180,92" fill="#f59e0b" opacity="0.7"/>
        <text x="175" y="175" fill="#f59e0b" font-size="10" text-anchor="middle" font-weight="bold">Virtual Image</text>
        <text x="175" y="190" fill="#f59e0b" font-size="8" text-anchor="middle">(upright, smaller)</text>
        
        <!-- Traced ray to show where they appear to meet -->
        <line x1="480" y1="175" x2="175" y2="85" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5"/>
        
        <!-- Eye position -->
        <circle cx="490" cy="80" r="18" fill="none" stroke="currentColor" stroke-width="2"/>
        <circle cx="490" cy="80" r="6" fill="currentColor"/>
        <text x="490" y="110" fill="currentColor" font-size="9" text-anchor="middle">Observer</text>
        
        <!-- Properties box -->
        <rect x="380" y="150" width="140" height="75" fill="hsl(var(--muted)/0.6)" rx="6" stroke="#ccc"/>
        <text x="450" y="168" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Image Properties:</text>
        <text x="450" y="185" fill="#f59e0b" font-size="10" text-anchor="middle">✓ Virtual (always)</text>
        <text x="450" y="200" fill="#f59e0b" font-size="10" text-anchor="middle">✓ Upright (always)</text>
        <text x="450" y="215" fill="#f59e0b" font-size="10" text-anchor="middle">✓ Smaller (always)</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.9rem; color: var(--muted-foreground);">The image appears on the <strong>same side</strong> as the object</p>
  </div>

  <div class="definition-block" style="border-left: 4px solid #f59e0b;">
    <h4>🎯 Image Properties (Always the Same):</h4>
    <ul>
      <li><strong>Virtual</strong> - cannot be projected onto a screen</li>
      <li><strong>Upright</strong> - same orientation as the object</li>
      <li><strong>Smaller</strong> (diminished) - always reduced in size</li>
      <li>Appears on the <strong>same side of the lens as the object</strong></li>
    </ul>
  </div>

  <div class="example-block">
    <h4>📚 Application:</h4>
    <p>Concave lenses are used in <strong>spectacles for short-sighted people</strong>. They diverge light before it enters the eye, helping the image focus correctly on the retina.</p>
  </div>
</div>
          `,
          canonical_keywords: ["concave lens", "ray diagram", "virtual image", "upright", "diminished", "diverging", "virtual focus"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Describe the properties of an image formed by a concave lens.",
              marks: 3,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["virtual", "upright", "smaller", "diminished"]
            },
            {
              id: "p2",
              prompt_template: "Draw and label a ray diagram showing how a concave lens forms an image.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["parallel ray", "through centre", "diverge", "virtual focus", "same side"]
            }
          ]
        },
        {
          id: "4-6-2-5-magnification",
          title: "Magnification",
          pair_title: "Concave Lens & Magnification",
          type: "content",
          study_group: 4,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Magnification</h3>
  
  <div class="definition-block">
    <h4>📐 What is Magnification?</h4>
    <p>Magnification tells you <strong>how much bigger or smaller</strong> an image is compared to the object.</p>
  </div>

  <div class="equation-block" style="background: linear-gradient(135deg, hsl(var(--primary)/0.1), hsl(var(--secondary)/0.1)); padding: 1.5rem; border-radius: 12px; margin: 1rem 0; text-align: center;">
    <h4>Magnification Equation:</h4>
    <p style="font-size: 2rem; font-weight: bold; color: hsl(var(--primary));">Magnification = Image Height / Object Height</p>
    <p style="font-size: 1rem; margin-top: 0.5rem; color: var(--muted-foreground);">No units — it is a <strong>ratio</strong></p>
  </div>

  <!-- Magnification Triangle Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Magnification Formula Triangle</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="280" height="200" viewBox="0 0 280 200">
        <polygon points="140,20 40,180 240,180" fill="hsl(var(--muted)/0.3)" stroke="currentColor" stroke-width="3"/>
        <line x1="40" y1="100" x2="240" y2="100" stroke="currentColor" stroke-width="2"/>
        <text x="140" y="70" fill="#22c55e" font-size="16" text-anchor="middle" font-weight="bold">Image Height</text>
        <text x="90" y="145" fill="#3b82f6" font-size="14" text-anchor="middle" font-weight="bold">M</text>
        <text x="190" y="140" fill="#ec4899" font-size="12" text-anchor="middle" font-weight="bold">Object</text>
        <text x="190" y="158" fill="#ec4899" font-size="12" text-anchor="middle" font-weight="bold">Height</text>
        <text x="140" y="145" fill="currentColor" font-size="20" text-anchor="middle">×</text>
      </svg>
    </div>
    <p style="text-align: center; font-size: 0.9rem; color: var(--muted-foreground);">Cover what you want to find, then multiply or divide the remaining values</p>
  </div>

  <div class="key-facts-block">
    <h4>📊 Interpretation:</h4>
    <ul>
      <li><strong>Magnification > 1</strong> → image is <span style="color: #22c55e;">magnified</span> (larger)</li>
      <li><strong>Magnification = 1</strong> → image is <span style="color: #3b82f6;">same size</span></li>
      <li><strong>Magnification < 1</strong> → image is <span style="color: #ef4444;">diminished</span> (smaller)</li>
    </ul>
  </div>

  <!-- Visual Examples -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Magnification Examples</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="460" height="180" viewBox="0 0 460 180">
        <!-- Example 1: M > 1 -->
        <rect x="10" y="10" width="135" height="160" fill="hsl(var(--muted)/0.3)" rx="8"/>
        <text x="77" y="30" fill="#22c55e" font-size="11" text-anchor="middle" font-weight="bold">M = 2 (magnified)</text>
        <line x1="40" y1="125" x2="40" y2="85" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="40,80 35,90 45,90" fill="#f59e0b"/>
        <text x="40" y="145" fill="#f59e0b" font-size="9" text-anchor="middle">Object: 2cm</text>
        <line x1="105" y1="125" x2="105" y2="45" stroke="#22c55e" stroke-width="4"/>
        <polygon points="105,40 100,50 110,50" fill="#22c55e"/>
        <text x="105" y="145" fill="#22c55e" font-size="9" text-anchor="middle">Image: 4cm</text>
        <text x="77" y="165" fill="currentColor" font-size="10" text-anchor="middle">4 ÷ 2 = 2</text>
        
        <!-- Example 2: M = 1 -->
        <rect x="162" y="10" width="135" height="160" fill="hsl(var(--muted)/0.3)" rx="8"/>
        <text x="230" y="30" fill="#3b82f6" font-size="11" text-anchor="middle" font-weight="bold">M = 1 (same size)</text>
        <line x1="190" y1="125" x2="190" y2="70" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="190,65 185,75 195,75" fill="#f59e0b"/>
        <text x="190" y="145" fill="#f59e0b" font-size="9" text-anchor="middle">Object: 3cm</text>
        <line x1="270" y1="125" x2="270" y2="70" stroke="#3b82f6" stroke-width="4"/>
        <polygon points="270,65 265,75 275,75" fill="#3b82f6"/>
        <text x="270" y="145" fill="#3b82f6" font-size="9" text-anchor="middle">Image: 3cm</text>
        <text x="230" y="165" fill="currentColor" font-size="10" text-anchor="middle">3 ÷ 3 = 1</text>
        
        <!-- Example 3: M < 1 -->
        <rect x="315" y="10" width="135" height="160" fill="hsl(var(--muted)/0.3)" rx="8"/>
        <text x="382" y="30" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">M = 0.5 (smaller)</text>
        <line x1="343" y1="125" x2="343" y2="60" stroke="#f59e0b" stroke-width="4"/>
        <polygon points="343,55 338,65 348,65" fill="#f59e0b"/>
        <text x="343" y="145" fill="#f59e0b" font-size="9" text-anchor="middle">Object: 4cm</text>
        <line x1="420" y1="125" x2="420" y2="92" stroke="#ef4444" stroke-width="4"/>
        <polygon points="420,87 415,97 425,97" fill="#ef4444"/>
        <text x="420" y="145" fill="#ef4444" font-size="9" text-anchor="middle">Image: 2cm</text>
        <text x="382" y="165" fill="currentColor" font-size="10" text-anchor="middle">2 ÷ 4 = 0.5</text>
      </svg>
    </div>
  </div>

  <div class="key-idea-block">
    <h4>💡 Why Magnification Works:</h4>
    <p>The lens changes the <strong>angles at which rays meet</strong>. These angles determine where the image forms and how large it appears.</p>
    <ul>
      <li>If the rays meet at a <strong>larger separation</strong> from the axis → image height is greater → <strong>magnified</strong></li>
      <li>If they meet <strong>closer together</strong> → image height is smaller → <strong>diminished</strong></li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>📏 Important Notes:</h4>
    <ul>
      <li>Works for <strong>both convex and concave</strong> lenses</li>
      <li>Both heights must be measured in the <strong>same units</strong> (mm, cm, etc.)</li>
      <li>The answer has <strong>no units</strong> because it's a ratio</li>
    </ul>
  </div>
</div>
          `,
          canonical_keywords: ["magnification", "image height", "object height", "ratio", "magnified", "diminished", "same size"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "State the equation for magnification.",
              marks: 1,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["image height", "object height", "ratio"]
            },
            {
              id: "p2",
              prompt_template: "An object is 2 cm tall and its image is 6 cm tall. Calculate the magnification.",
              marks: 2,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["6 ÷ 2", "3", "magnification = 3"]
            },
            {
              id: "p3",
              prompt_template: "Explain what a magnification of 0.4 tells you about the image.",
              marks: 2,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["smaller", "diminished", "less than 1"]
            }
          ]
        }
      ]
    },
    // ============================================
    // SECTION 2: 4.6.2.6 – VISIBLE LIGHT
    // ============================================
    {
      id: "4-6-2-6-visible-light",
      spec_number: "4.6.2.6",
      title: "Visible Light",
      subsections: [
        // PAIR 1: Visible Spectrum & Colour Filters
        {
          id: "4-6-2-6-visible-spectrum",
          title: "The Visible Spectrum",
          pair_title: "Spectrum & Filters",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">The Visible Spectrum</h3>
  
  <div class="definition-block">
    <h4>💡 Definition:</h4>
    <p>The <strong>visible light spectrum</strong> is the small part of the electromagnetic spectrum that our eyes can detect. Each colour of visible light has its own <strong>specific wavelength and frequency</strong>.</p>
  </div>

  <!-- Visible Spectrum Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>The Visible Light Spectrum</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="500" height="180" viewBox="0 0 500 180">
        <defs>
          <linearGradient id="spectrum" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ff0000"/>
            <stop offset="17%" style="stop-color:#ff7700"/>
            <stop offset="33%" style="stop-color:#ffff00"/>
            <stop offset="50%" style="stop-color:#00ff00"/>
            <stop offset="67%" style="stop-color:#0000ff"/>
            <stop offset="83%" style="stop-color:#4b0082"/>
            <stop offset="100%" style="stop-color:#9400d3"/>
          </linearGradient>
        </defs>
        
        <rect x="30" y="60" width="440" height="50" fill="url(#spectrum)" rx="5"/>
        
        <line x1="30" y1="40" x2="470" y2="40" stroke="currentColor" stroke-width="2"/>
        <polygon points="470,40 460,35 460,45" fill="currentColor"/>
        <text x="250" y="30" fill="currentColor" font-size="11" text-anchor="middle">Wavelength decreases →</text>
        
        <text x="50" y="135" fill="#ff0000" font-size="10" text-anchor="middle" font-weight="bold">Red</text>
        <text x="110" y="135" fill="#ff7700" font-size="10" text-anchor="middle" font-weight="bold">Orange</text>
        <text x="175" y="135" fill="#ccaa00" font-size="10" text-anchor="middle" font-weight="bold">Yellow</text>
        <text x="250" y="135" fill="#00aa00" font-size="10" text-anchor="middle" font-weight="bold">Green</text>
        <text x="325" y="135" fill="#0000ff" font-size="10" text-anchor="middle" font-weight="bold">Blue</text>
        <text x="390" y="135" fill="#4b0082" font-size="10" text-anchor="middle" font-weight="bold">Indigo</text>
        <text x="450" y="135" fill="#9400d3" font-size="10" text-anchor="middle" font-weight="bold">Violet</text>
        
        <text x="50" y="155" fill="currentColor" font-size="8" text-anchor="middle">~700nm</text>
        <text x="450" y="155" fill="currentColor" font-size="8" text-anchor="middle">~400nm</text>
        
        <text x="250" y="170" fill="currentColor" font-size="9" text-anchor="middle">ROY G BIV - Longest → Shortest wavelength</text>
      </svg>
    </div>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Relationship:</h4>
    <p>As <strong>wavelength decreases</strong>, <strong>frequency increases</strong>. Violet has the highest frequency (most energy), while red has the lowest frequency.</p>
    <p>Understanding this helps explain how objects absorb or reflect specific colours.</p>
  </div>
</div>
          `,
          canonical_keywords: ["visible spectrum", "wavelength", "frequency", "ROY G BIV", "red", "violet", "electromagnetic spectrum"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "State the order of colours in the visible spectrum from longest to shortest wavelength.",
              marks: 2,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
            },
            {
              id: "p2",
              prompt_template: "Explain the relationship between wavelength and frequency in the visible spectrum.",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["wavelength decreases", "frequency increases", "violet highest", "red lowest"]
            }
          ]
        },
        {
          id: "4-6-2-6-colour-filters",
          title: "How Colour Filters Work",
          pair_title: "Spectrum & Filters",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">How Colour Filters Work</h3>
  
  <div class="definition-block">
    <h4>🎨 Colour Filters:</h4>
    <p>Colour filters control which colours <strong>pass through</strong> and which are <strong>absorbed</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>How They Behave:</h4>
    <ul>
      <li>A <strong style="color: #ef4444;">red filter</strong> transmits red light only and absorbs all other colours</li>
      <li>A <strong style="color: #22c55e;">green filter</strong> transmits green light only</li>
      <li>A <strong style="color: #3b82f6;">blue filter</strong> transmits blue light only</li>
      <li>A <strong style="color: #eab308;">yellow filter</strong> transmits red + green wavelengths (yellow = red + green)</li>
    </ul>
  </div>

  <!-- Filter Diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Filter Behaviour</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="160" viewBox="0 0 400 160">
        <!-- White light -->
        <defs>
          <linearGradient id="whitelight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ff6666"/>
            <stop offset="33%" style="stop-color:#66ff66"/>
            <stop offset="66%" style="stop-color:#6666ff"/>
            <stop offset="100%" style="stop-color:#ff66ff"/>
          </linearGradient>
        </defs>
        
        <text x="50" y="30" fill="currentColor" font-size="12" text-anchor="middle" font-weight="bold">White Light</text>
        <rect x="20" y="40" width="60" height="20" fill="url(#whitelight)" rx="3"/>
        
        <line x1="80" y1="50" x2="130" y2="50" stroke="url(#whitelight)" stroke-width="8"/>
        
        <rect x="130" y="20" width="20" height="60" fill="#ef4444" opacity="0.8" stroke="#aa0000"/>
        <text x="140" y="100" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">Red Filter</text>
        
        <line x1="150" y1="50" x2="220" y2="50" stroke="#ef4444" stroke-width="8"/>
        
        <text x="260" y="55" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">Only red passes</text>
        
        <!-- X marks for absorbed colours -->
        <text x="140" y="130" fill="currentColor" font-size="9" text-anchor="middle">Other colours absorbed</text>
      </svg>
    </div>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Idea:</h4>
    <p>Filters <strong>don't add colour</strong> — they <strong>remove certain wavelengths</strong> by absorbing them, allowing only selected wavelengths to pass.</p>
    <p>So if you shine white light through a red filter, the output becomes red because all non-red wavelengths were absorbed.</p>
  </div>
</div>
          `,
          canonical_keywords: ["colour filter", "absorb", "transmit", "wavelength", "red filter", "green filter", "blue filter"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Explain how a red filter affects white light.",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["absorbs", "other colours", "transmits", "red only"]
            }
          ]
        },
        // PAIR 2: Why Objects Have Colour & Transparent/Opaque
        {
          id: "4-6-2-6-object-colour",
          title: "Why Objects Have Colour",
          pair_title: "Object Colour & Materials",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Why Objects Have Colour</h3>
  
  <div class="definition-block">
    <h4>🎨 Object Colour:</h4>
    <p>An object's colour depends on which wavelengths it <strong>reflects</strong> and which it <strong>absorbs</strong>.</p>
  </div>

  <div class="key-facts-block">
    <h4>✔ Opaque Objects:</h4>
    <ul>
      <li>They <strong>absorb</strong> some wavelengths</li>
      <li>They <strong>reflect</strong> the wavelengths you see</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>Examples:</h4>
    <ul>
      <li>A <strong style="color: #ef4444;">red apple</strong> reflects red wavelengths and absorbs all others</li>
      <li>A <strong style="color: #22c55e;">green leaf</strong> reflects green wavelengths and absorbs red and blue</li>
      <li>A <strong>white object</strong> reflects all wavelengths</li>
      <li>A <strong>black object</strong> absorbs all wavelengths</li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Important Rule:</h4>
    <p>White light (a mix of all colours) hits the object → the object's surface absorbs some wavelengths → the wavelengths that are <strong>not absorbed are reflected</strong> → the reflected wavelengths enter your eyes → your brain interprets them as the object's colour.</p>
  </div>
</div>
          `,
          canonical_keywords: ["object colour", "reflect", "absorb", "wavelength", "opaque", "white", "black"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Explain why a red object appears red in white light.",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["reflects red", "absorbs other colours", "white light", "wavelengths"]
            }
          ]
        },
        {
          id: "4-6-2-6-transparent-opaque",
          title: "Transparent, Translucent, and Opaque",
          pair_title: "Object Colour & Materials",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Transparent, Translucent, and Opaque Objects</h3>
  
  <div class="definition-block" style="border-left: 4px solid #3b82f6;">
    <h4>🔵 Transparent Objects:</h4>
    <ul>
      <li>Transmit <strong>most</strong> of the light that hits them</li>
      <li>Allow you to see <strong>clearly through</strong> them</li>
      <li>Example: clear glass, water</li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #8b5cf6; margin-top: 1rem;">
    <h4>🔷 Translucent Objects:</h4>
    <ul>
      <li>Transmit <strong>some</strong> light</li>
      <li><strong>Scatter</strong> the rest</li>
      <li>You can see shapes but <strong>not clear images</strong></li>
      <li>Example: frosted glass, tissue paper</li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #374151; margin-top: 1rem;">
    <h4>⚫ Opaque Objects:</h4>
    <ul>
      <li>Transmit <strong>no light</strong></li>
      <li>Either <strong>reflect or absorb</strong> all incoming wavelengths</li>
      <li>Example: wood, metal, book covers</li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Point:</h4>
    <p>This classification affects how objects appear under different lighting conditions.</p>
  </div>
</div>
          `,
          canonical_keywords: ["transparent", "translucent", "opaque", "transmit", "scatter", "absorb", "reflect"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Describe the difference between transparent and translucent materials.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["transparent", "most light", "see clearly", "translucent", "some light", "scatter"]
            }
          ]
        },
        // PAIR 3: Filter Effects on Objects
        {
          id: "4-6-2-6-filter-effects",
          title: "How Filters Affect Object Appearance",
          pair_title: "Filter Effects",
          type: "content",
          study_group: 3,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">How Filters Affect the Appearance of Objects</h3>

  <div class="example-block" style="border-left: 4px solid #ef4444;">
    <h4>Example 1: 🔴 A red object under a red filter</h4>
    <p>The object appears <strong>red</strong>, because the filter allows red light to pass and the object reflects red light.</p>
  </div>

  <div class="example-block" style="border-left: 4px solid #3b82f6; margin-top: 1rem;">
    <h4>Example 2: 🔵 A blue object under a red filter</h4>
    <p>The object will look <strong>black or very dark</strong>.</p>
    <p><em>Explanation:</em> The blue object reflects blue light, but the red filter blocks all blue wavelengths, so no light reaches your eyes.</p>
  </div>

  <div class="example-block" style="border-left: 4px solid #22c55e; margin-top: 1rem;">
    <h4>Example 3: A green object under white light</h4>
    <p>It appears <strong>green</strong>, because it reflects green wavelengths.</p>
  </div>

  <div class="example-block" style="border-left: 4px solid #eab308; margin-top: 1rem;">
    <h4>Example 4: A yellow object under a blue filter</h4>
    <p>Appears <strong>black or dull</strong>, because yellow objects reflect red + green light, and a blue filter blocks both.</p>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Important Understanding:</h4>
    <p>The colour you see depends on:</p>
    <ol>
      <li>The <strong>colour of the object</strong> (what wavelengths it reflects)</li>
      <li>Which <strong>wavelengths the filter allows</strong> to reach it</li>
    </ol>
  </div>
</div>
          `,
          canonical_keywords: ["filter", "object colour", "appears black", "red filter", "blue filter", "absorb", "reflect"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Explain why a blue object appears black when viewed through a red filter.",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["blue reflects blue", "red filter absorbs blue", "no light reaches eyes"]
            }
          ]
        }
      ]
    },
    // ============================================
    // SECTION 3: 4.6.3.1 – INFRARED RADIATION
    // ============================================
    {
      id: "4-6-3-1-infrared",
      spec_number: "4.6.3.1",
      title: "Emission and Absorption of Infrared Radiation",
      subsections: [
        // PAIR 1: All Objects Emit IR & Temperature Effects
        {
          id: "4-6-3-1-all-objects-emit",
          title: "All Objects Emit and Absorb IR",
          pair_title: "IR Emission Basics",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">All Objects Emit and Absorb Infrared Radiation</h3>
  
  <div class="definition-block">
    <h4>🌡️ Key Principle:</h4>
    <p>Every object above <strong>absolute zero</strong> emits electromagnetic radiation, mostly in the <strong>infrared (IR)</strong> part of the spectrum. This includes everyday objects such as the ground, your body, cars, houses, and even ice.</p>
  </div>

  <div class="key-idea-block">
    <h4>🔑 Key Idea:</h4>
    <p>The <strong>hotter an object is</strong>, the more infrared radiation it <strong>emits in a given time</strong>. This is why hot objects glow faintly red in the dark — they are emitting large amounts of IR, some of which enters the visible range.</p>
  </div>
</div>
          `,
          canonical_keywords: ["infrared radiation", "emit", "absorb", "temperature", "electromagnetic spectrum", "absolute zero"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "State what happens to the infrared radiation emitted by an object as its temperature increases.",
              marks: 2,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["more radiation", "emits more", "increases"]
            }
          ]
        },
        {
          id: "4-6-3-1-temperature-radiation",
          title: "Temperature and Radiation Emission",
          pair_title: "IR Emission Basics",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Temperature and Radiation Emission</h3>
  
  <div class="key-facts-block">
    <h4>📈 The Link Between Temperature and Radiation:</h4>
    <p>As temperature increases:</p>
    <ul>
      <li><strong>Total energy emitted increases</strong></li>
      <li>Radiation becomes <strong>more intense</strong></li>
      <li>The <strong>peak wavelength</strong> of radiation becomes <strong>shorter</strong> (shifts towards visible light)</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>💡 Example:</h4>
    <p>This explains why very hot metals glow <strong>red → orange → white</strong> — hotter surfaces emit shorter wavelengths.</p>
  </div>
</div>
          `,
          canonical_keywords: ["temperature", "radiation emission", "intensity", "wavelength", "peak wavelength", "glow"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Explain why a very hot piece of metal glows red, then orange, then white as it gets hotter.",
              marks: 4,
              type: "short-answer",
              difficulty: "hard",
              randomise: true,
              expected_keywords: ["hotter", "more radiation", "shorter wavelength", "visible range"]
            }
          ]
        },
        // PAIR 2: Absorption & Surface Types
        {
          id: "4-6-3-1-absorption",
          title: "Absorption of Infrared Radiation",
          pair_title: "Absorption & Surfaces",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Absorption of Infrared Radiation</h3>
  
  <div class="definition-block">
    <h4>📥 Absorption:</h4>
    <p>Objects <strong>absorb</strong> infrared radiation from their surroundings. The temperature of a body changes depending on how much IR it absorbs compared to how much it emits.</p>
  </div>

  <div class="key-facts-block">
    <h4>Temperature Change Rules:</h4>
    <ul>
      <li>If <strong>absorption > emission</strong> → The object <strong>heats up</strong></li>
      <li>If <strong>emission > absorption</strong> → The object <strong>cools down</strong></li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h4>🏠 Surface Type Matters:</h4>
    <ul>
      <li><strong>Black, matte surfaces</strong> absorb AND emit IR radiation <strong>most effectively</strong></li>
      <li><strong>White or shiny surfaces</strong> absorb and emit the <strong>least</strong></li>
    </ul>
  </div>

  <div class="example-block">
    <h4>Real-World Applications:</h4>
    <ul>
      <li><strong>Solar panels are black</strong> → to absorb more radiation</li>
      <li><strong>Survival blankets are shiny silver</strong> → to reduce heat emission</li>
    </ul>
  </div>
</div>
          `,
          canonical_keywords: ["absorption", "emission", "heats up", "cools down", "black surface", "shiny surface", "matte"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Explain why solar panels are black.",
              marks: 2,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["black", "absorbs more", "radiation", "heat"]
            },
            {
              id: "p2",
              prompt_template: "Describe how the colour and texture of a surface affects its absorption and emission of infrared radiation.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["black matte", "absorbs most", "emits most", "white shiny", "absorbs least"]
            }
          ]
        },
        {
          id: "4-6-3-1-perfect-black-body-intro",
          title: "What Is a Perfect Black Body?",
          pair_title: "Absorption & Surfaces",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">What Is a Perfect Black Body?</h3>
  
  <div class="definition-block">
    <h4>⬛ Perfect Black Body:</h4>
    <p>A perfect black body is an <strong>idealised object</strong> that:</p>
    <ul>
      <li><strong>Absorbs all radiation</strong> that hits it (no reflection, no transmission)</li>
      <li><strong>Emits radiation as effectively as possible</strong> for its temperature</li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Understanding:</h4>
    <p>Because it absorbs all wavelengths equally, a perfect black body is also the <strong>best possible emitter</strong> of radiation. Real objects try to imitate this behaviour but none achieve true perfection.</p>
  </div>
</div>
          `,
          canonical_keywords: ["perfect black body", "absorbs all", "emits", "idealised", "no reflection"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Describe the properties of a perfect black body.",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["absorbs all radiation", "best emitter", "no reflection", "idealised"]
            }
          ]
        }
      ]
    },
    // ============================================
    // SECTION 4: 4.6.3.2 – PERFECT BLACK BODIES AND RADIATION
    // ============================================
    {
      id: "4-6-3-2-black-bodies",
      spec_number: "4.6.3.2",
      title: "Perfect Black Bodies and Radiation",
      subsections: [
        // PAIR 1: All Bodies Emit & Temperature Distribution
        {
          id: "4-6-3-2-all-bodies-emit",
          title: "All Bodies Emit Radiation",
          pair_title: "Radiation Principles",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">All Bodies Emit Radiation</h3>
  
  <div class="definition-block">
    <h4>☀️ Universal Emission:</h4>
    <p>Every object radiates energy as <strong>electromagnetic waves</strong>. This radiation includes a range of wavelengths, and the exact mix depends on the object's <strong>temperature</strong>.</p>
  </div>

  <div class="key-idea-block">
    <h4>🔑 Key Principle:</h4>
    <p>Even objects that feel <strong>cold to touch</strong> are still emitting radiation — just <strong>less</strong> than hotter objects.</p>
  </div>
</div>
          `,
          canonical_keywords: ["emit radiation", "electromagnetic waves", "temperature", "wavelengths", "cold objects"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "State whether cold objects emit infrared radiation. Explain your answer.",
              marks: 2,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["yes", "all objects", "less than hot", "above absolute zero"]
            }
          ]
        },
        {
          id: "4-6-3-2-wavelength-distribution",
          title: "Temperature and Wavelength Distribution",
          pair_title: "Radiation Principles",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Temperature Determines Intensity and Wavelength Distribution</h3>
  
  <div class="key-facts-block">
    <h4>📈 When an Object Becomes Hotter:</h4>
    <ul>
      <li>It emits <strong>more radiation per second</strong></li>
      <li>The wavelengths emitted <strong>shift towards the shorter end</strong> of the spectrum</li>
      <li>Radiation becomes <strong>more intense</strong> overall</li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h4>💡 Important:</h4>
    <p>A hotter object does not just emit <strong>more</strong> radiation — it emits <strong>different</strong> radiation (shorter wavelengths).</p>
  </div>
</div>
          `,
          canonical_keywords: ["intensity", "wavelength distribution", "shorter wavelength", "hotter", "radiation spectrum"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Describe how the radiation emitted by an object changes as its temperature increases.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["more radiation", "more intense", "shorter wavelength", "spectrum shifts"]
            }
          ]
        },
        // PAIR 2: Thermal Balance & Earth's Temperature
        {
          id: "4-6-3-2-thermal-balance",
          title: "Thermal Balance: Absorption vs Emission",
          pair_title: "Earth's Temperature",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Thermal Balance: Absorption vs Emission</h3>
  
  <div class="definition-block">
    <h4>⚖️ Temperature Equilibrium:</h4>
    <p>A body's temperature remains <strong>constant</strong> only if:</p>
    <p style="text-align: center; font-size: 1.2rem; font-weight: bold; color: hsl(var(--primary));">Energy absorbed per second = Energy emitted per second</p>
  </div>

  <div class="key-facts-block">
    <h4>Temperature Change:</h4>
    <ul>
      <li>If a body <strong>absorbs faster than it emits</strong> → Its temperature <strong>increases</strong></li>
      <li>If a body <strong>emits faster than it absorbs</strong> → Its temperature <strong>decreases</strong></li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Understanding:</h4>
    <p>This balance determines the temperature of any planet, building, or physical system.</p>
  </div>
</div>
          `,
          canonical_keywords: ["thermal balance", "equilibrium", "absorbs", "emits", "temperature constant", "energy balance"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Explain what happens to the temperature of an object if it absorbs more radiation than it emits.",
              marks: 2,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["temperature increases", "heats up", "absorbs more"]
            }
          ]
        },
        {
          id: "4-6-3-2-earth-temperature",
          title: "Earth's Temperature and Radiation Balance",
          pair_title: "Earth's Temperature",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Earth's Temperature and Radiation Balance</h3>
  
  <div class="definition-block">
    <h4>🌍 Earth's Temperature Depends On:</h4>
    <ul>
      <li><strong>Absorption</strong> of radiation from the Sun (mainly visible light and some infrared)</li>
      <li><strong>Emission</strong> of infrared radiation back into space</li>
      <li><strong>Reflection</strong> of incoming radiation by clouds, ice, oceans, and land</li>
      <li>The <strong>atmosphere</strong>, which can trap infrared radiation (greenhouse effect)</li>
    </ul>
  </div>

  <div class="key-facts-block">
    <h4>🌡️ Why Earth's Temperature Stays Relatively Stable:</h4>
    <ul>
      <li>Earth <strong>absorbs solar radiation</strong> during the day</li>
      <li>Earth <strong>emits infrared radiation</strong> continuously</li>
      <li>When these processes <strong>balance</strong>, temperature remains steady</li>
      <li>If the balance changes (e.g., stronger greenhouse effect), Earth warms or cools</li>
    </ul>
  </div>

  <div class="key-idea-block">
    <h4>🧠 Key Takeaway:</h4>
    <p>The temperature of Earth depends on the <strong>radiation balance</strong> between what is absorbed and what is emitted.</p>
  </div>

  <div class="example-block">
    <h4>📊 Evidence of Energy Imbalance:</h4>
    <ul>
      <li>Increases in atmospheric CO₂ → more radiation trapped → higher average temperature</li>
      <li>Changes in albedo (reflectivity) due to melting ice</li>
      <li>Temperature graphs over time showing evidence of energy imbalance</li>
    </ul>
  </div>
</div>
          `,
          canonical_keywords: ["Earth temperature", "radiation balance", "greenhouse effect", "absorb", "emit", "atmosphere", "CO2"],
          practice_items: [
            {
              id: "p1",
              prompt_template: "Explain how the Earth's temperature is determined by radiation balance.",
              marks: 4,
              type: "short-answer",
              difficulty: "hard",
              randomise: true,
              expected_keywords: ["absorbs solar", "emits infrared", "balance", "greenhouse effect", "stable temperature"]
            },
            {
              id: "p2",
              prompt_template: "Explain how an increase in greenhouse gases can affect Earth's temperature.",
              marks: 4,
              type: "short-answer",
              difficulty: "hard",
              randomise: true,
              expected_keywords: ["traps infrared", "less escapes", "absorption greater than emission", "temperature rises"]
            }
          ]
        }
      ]
    }
  ]
};
