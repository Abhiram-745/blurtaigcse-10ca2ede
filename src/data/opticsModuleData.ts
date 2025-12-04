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
  pair_title?: string;
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
          id: "4-6-2-5-what-lens-does",
          title: "What a Lens Does",
          pair_title: "Pair 1: Lens Basics",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – What a Lens Does</h3>
  
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>A <strong>lens</strong> forms an image by <strong>refracting light</strong> — bending rays as they pass from one transparent material to another. The amount of bending depends on the shape of the lens and the angle at which light enters.</p>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🔑 Key Idea:</h4>
    <p>Lenses control light so that rays <strong>meet (converge)</strong> or <strong>spread out (diverge)</strong>, creating an image that can be magnified, reduced, real, or virtual.</p>
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
              id: "p1-1",
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
          id: "4-6-2-5-types-of-lenses",
          title: "Types of Lenses",
          pair_title: "Pair 1: Lens Basics",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Types of Lenses</h3>
  
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
      <svg width="500" height="180" viewBox="0 0 500 180">
        <!-- CONVEX LENS -->
        <text x="125" y="20" fill="#3b82f6" font-size="13" text-anchor="middle" font-weight="bold">Convex (Converging)</text>
        
        <!-- Physical convex lens shape -->
        <ellipse cx="80" cy="90" rx="18" ry="50" fill="hsl(210, 100%, 90%)" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="80" y="155" fill="currentColor" font-size="10" text-anchor="middle">Physical shape</text>
        <text x="80" y="168" fill="#22c55e" font-size="9" text-anchor="middle">(thick in middle)</text>
        
        <!-- Convex lens diagram symbol -->
        <line x1="170" y1="40" x2="170" y2="140" stroke="#3b82f6" stroke-width="3"/>
        <polygon points="170,40 156,58 184,58" fill="#3b82f6"/>
        <polygon points="170,140 156,122 184,122" fill="#3b82f6"/>
        <text x="170" y="158" fill="currentColor" font-size="10" text-anchor="middle">Diagram symbol</text>

        <!-- CONCAVE LENS -->
        <text x="375" y="20" fill="#ec4899" font-size="13" text-anchor="middle" font-weight="bold">Concave (Diverging)</text>
        
        <!-- Physical concave lens shape -->
        <path d="M295 40 Q325 90 295 140" fill="none" stroke="#ec4899" stroke-width="2.5"/>
        <path d="M345 40 Q315 90 345 140" fill="none" stroke="#ec4899" stroke-width="2.5"/>
        <line x1="295" y1="40" x2="345" y2="40" stroke="#ec4899" stroke-width="2.5"/>
        <line x1="295" y1="140" x2="345" y2="140" stroke="#ec4899" stroke-width="2.5"/>
        <rect x="295" y="40" width="50" height="100" fill="hsl(330, 100%, 95%)"/>
        <text x="320" y="155" fill="currentColor" font-size="10" text-anchor="middle">Physical shape</text>
        <text x="320" y="168" fill="#f59e0b" font-size="9" text-anchor="middle">(thin in middle)</text>
        
        <!-- Concave lens diagram symbol -->
        <line x1="430" y1="40" x2="430" y2="140" stroke="#ec4899" stroke-width="3"/>
        <polygon points="430,40 416,58 444,58" fill="#ec4899" transform="rotate(180,430,49)"/>
        <polygon points="430,140 416,122 444,122" fill="#ec4899" transform="rotate(180,430,131)"/>
        <text x="430" y="158" fill="currentColor" font-size="10" text-anchor="middle">Diagram symbol</text>
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
      <tr><td>Uses</td><td>Magnifying glass, camera</td><td>Spectacles (short-sight)</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["convex lens", "concave lens", "converging", "diverging", "principal focus", "focal length", "thicker", "thinner"],
          practice_items: [
            {
              id: "p1-2",
              prompt_template: "Describe the differences between a convex and concave lens in terms of shape and how they affect light.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["convex", "concave", "converge", "diverge", "thicker middle", "thinner middle"]
            }
          ]
        },
        // PAIR 2: Principal Focus & Focal Length, Real vs Virtual Images
        {
          id: "4-6-2-5-principal-focus",
          title: "Principal Focus & Focal Length",
          pair_title: "Pair 2: Focus & Image Types",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Principal Focus & Focal Length</h3>
  
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

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Understanding focal length allows you to predict whether the image will be magnified or diminished.</h4>
  </div>

  <!-- Focal Length Diagram showing both convex and concave -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0;">
    <h4>Convex and Concave Lens Focus (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="520" height="200" viewBox="0 0 520 200">
        <!-- CONVEX SECTION -->
        <text x="130" y="18" fill="#3b82f6" font-size="12" text-anchor="middle" font-weight="bold">Convex: rays actually meet</text>
        
        <!-- Principal axis -->
        <line x1="20" y1="100" x2="240" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Convex lens -->
        <ellipse cx="100" cy="100" rx="8" ry="45" fill="hsl(210, 100%, 90%)" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- F marker -->
        <circle cx="160" cy="100" r="5" fill="#ef4444"/>
        <text x="160" y="125" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        
        <!-- Incoming parallel rays -->
        <line x1="25" y1="60" x2="92" y2="60" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="25" y1="100" x2="92" y2="100" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="25" y1="140" x2="92" y2="140" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Converging rays to F -->
        <line x1="108" y1="60" x2="160" y2="100" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="108" y1="100" x2="160" y2="100" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="108" y1="140" x2="160" y2="100" stroke="#22c55e" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Focal length arrow -->
        <line x1="100" y1="165" x2="160" y2="165" stroke="#8b5cf6" stroke-width="2" marker-end="url(#arrowhead)"/>
        <line x1="160" y1="165" x2="100" y2="165" stroke="#8b5cf6" stroke-width="2" marker-start="url(#arrowhead)"/>
        <text x="130" y="182" fill="#8b5cf6" font-size="10" text-anchor="middle">focal length (f)</text>
        
        <!-- CONCAVE SECTION -->
        <text x="390" y="18" fill="#ec4899" font-size="12" text-anchor="middle" font-weight="bold">Concave: rays appear to come from F</text>
        
        <!-- Principal axis -->
        <line x1="280" y1="100" x2="500" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.3"/>
        
        <!-- Concave lens -->
        <path d="M355 55 Q370 100 355 145" fill="none" stroke="#ec4899" stroke-width="2"/>
        <path d="M375 55 Q360 100 375 145" fill="none" stroke="#ec4899" stroke-width="2"/>
        <line x1="355" y1="55" x2="375" y2="55" stroke="#ec4899" stroke-width="2"/>
        <line x1="355" y1="145" x2="375" y2="145" stroke="#ec4899" stroke-width="2"/>
        
        <!-- Virtual F marker (behind lens) -->
        <circle cx="310" cy="100" r="5" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="310" y="125" fill="#ef4444" font-size="10" text-anchor="middle">F (virtual)</text>
        
        <!-- Incoming parallel rays -->
        <line x1="290" y1="60" x2="355" y2="60" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="290" y1="100" x2="355" y2="100" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="290" y1="140" x2="355" y2="140" stroke="#f59e0b" stroke-width="2">
          <animate attributeName="stroke-dashoffset" from="30" to="0" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Diverging rays after lens -->
        <line x1="375" y1="60" x2="480" y2="30" stroke="#8b5cf6" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="375" y1="100" x2="480" y2="100" stroke="#8b5cf6" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        <line x1="375" y1="140" x2="480" y2="170" stroke="#8b5cf6" stroke-width="2">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
        </line>
        
        <!-- Virtual rays traced back (dashed) -->
        <line x1="375" y1="60" x2="310" y2="100" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5"/>
        <line x1="375" y1="140" x2="310" y2="100" stroke="#8b5cf6" stroke-width="1.5" stroke-dasharray="5,4" opacity="0.5"/>
        
        <!-- Arrow marker definition -->
        <defs>
          <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <polygon points="0 0, 6 3, 0 6" fill="#8b5cf6"/>
          </marker>
        </defs>
      </svg>
    </div>
  </div>
</div>
          `,
          canonical_keywords: ["principal focus", "focal length", "convex", "concave", "parallel rays", "distance"],
          practice_items: [
            {
              id: "p2-1",
              prompt_template: "Define principal focus and focal length. How do they differ for convex and concave lenses?",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["principal focus", "focal length", "convex", "concave", "parallel rays", "meet", "appear"]
            }
          ]
        },
        {
          id: "4-6-2-5-real-virtual-images",
          title: "Real and Virtual Images",
          pair_title: "Pair 2: Focus & Image Types",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Real and Virtual Images</h3>
  
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
          <li>Convex lenses when object is <strong>inside the focal length</strong></li>
          <li>Concave lenses (always)</li>
        </ul>
      </li>
    </ul>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Real Image</th><th>Virtual Image</th></tr></thead>
    <tbody>
      <tr><td>Rays</td><td>Actually meet</td><td>Appear to meet (traced back)</td></tr>
      <tr><td>Can project?</td><td>Yes</td><td>No</td></tr>
      <tr><td>Orientation</td><td>Inverted</td><td>Upright</td></tr>
      <tr><td>Formed by</td><td>Convex (object beyond F)</td><td>Convex (object inside F), Concave (always)</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["real image", "virtual image", "inverted", "upright", "projected", "screen", "traced back"],
          practice_items: [
            {
              id: "p2-2",
              prompt_template: "Explain the difference between a real and virtual image. Give examples of when each is formed.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["real", "virtual", "inverted", "upright", "projected", "screen"]
            }
          ]
        },
        // PAIR 3: Ray Diagrams Convex & Concave
        {
          id: "4-6-2-5-ray-diagrams-convex",
          title: "Ray Diagrams: Convex Lens",
          pair_title: "Pair 3: Ray Diagrams",
          type: "content",
          study_group: 3,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – Ray Diagrams: Convex Lens</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Ray diagrams allow you to see exactly where the image forms and what its properties are.</p>
  </div>

  <div class="definition-block">
    <h4>🔑 Three Key Rays You Always Draw:</h4>
    <ol>
      <li><strong>Ray 1 (Parallel → F):</strong> A ray parallel to the principal axis → refracts through the principal focus (F)</li>
      <li><strong>Ray 2 (Through Centre):</strong> A ray through the centre of the lens → passes straight through without bending</li>
      <li><strong>Ray 3 (Through F → Parallel):</strong> A ray through the focal point before reaching the lens → refracts parallel to the axis</li>
    </ol>
  </div>

  <!-- The Three Construction Rays Diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; background: hsl(40, 100%, 96%);">
    <h4 style="color: #c2410c;">The Three Construction Rays (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="600" height="280" viewBox="0 0 600 280">
        <!-- Principal axis -->
        <line x1="30" y1="140" x2="570" y2="140" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        <text x="580" y="144" fill="currentColor" font-size="10">axis</text>
        
        <!-- Convex lens -->
        <ellipse cx="250" cy="140" rx="10" ry="70" fill="hsl(210, 100%, 85%)" stroke="#3b82f6" stroke-width="2.5"/>
        
        <!-- 2F and F markers (left side) -->
        <circle cx="130" cy="140" r="5" fill="#8b5cf6"/>
        <text x="130" y="165" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">2F</text>
        <circle cx="190" cy="140" r="5" fill="#ef4444"/>
        <text x="190" y="165" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        
        <!-- 2F and F markers (right side) -->
        <circle cx="310" cy="140" r="5" fill="#ef4444"/>
        <text x="310" y="165" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="370" cy="140" r="5" fill="#8b5cf6"/>
        <text x="370" y="165" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- OBJECT (between F and 2F) -->
        <line x1="150" y1="140" x2="150" y2="55" stroke="#f97316" stroke-width="4"/>
        <polygon points="150,55 143,70 157,70" fill="#f97316"/>
        <text x="125" y="180" fill="#f97316" font-size="13" font-weight="bold">OBJECT</text>
        
        <!-- RAY 1: Parallel to axis → through F (GREEN) -->
        <line x1="150" y1="55" x2="240" y2="55" stroke="#22c55e" stroke-width="3">
          <animate attributeName="stroke-dashoffset" from="60" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="260" y1="55" x2="450" y2="195" stroke="#22c55e" stroke-width="3">
          <animate attributeName="stroke-dashoffset" from="60" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <rect x="73" y="36" width="18" height="18" rx="4" fill="#22c55e"/>
        <text x="82" y="50" fill="white" font-size="12" text-anchor="middle" font-weight="bold">1</text>
        
        <!-- RAY 2: Through centre (BLUE) -->
        <line x1="150" y1="55" x2="450" y2="195" stroke="#3b82f6" stroke-width="3">
          <animate attributeName="stroke-dashoffset" from="60" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <rect x="188" y="66" width="18" height="18" rx="4" fill="#3b82f6"/>
        <text x="197" y="80" fill="white" font-size="12" text-anchor="middle" font-weight="bold">2</text>
        
        <!-- RAY 3: Through F → parallel (MAGENTA) -->
        <line x1="150" y1="55" x2="240" y2="100" stroke="#ec4899" stroke-width="3">
          <animate attributeName="stroke-dashoffset" from="60" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="260" y1="100" x2="450" y2="100" stroke="#ec4899" stroke-width="3" stroke-dasharray="6,4">
          <animate attributeName="stroke-dashoffset" from="60" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <!-- Extended to show intersection -->
        <line x1="260" y1="100" x2="390" y2="195" stroke="#ec4899" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>
        <rect x="120" y="75" width="18" height="18" rx="4" fill="#ec4899"/>
        <text x="129" y="89" fill="white" font-size="12" text-anchor="middle" font-weight="bold">3</text>
        
        <!-- IMAGE (inverted, beyond 2F) -->
        <line x1="390" y1="140" x2="390" y2="195" stroke="#22c55e" stroke-width="4"/>
        <polygon points="390,195 383,180 397,180" fill="#22c55e"/>
        <text x="390" y="220" fill="#22c55e" font-size="13" text-anchor="middle" font-weight="bold">IMAGE</text>
        
        <!-- Ray Key -->
        <rect x="460" y="30" width="130" height="75" fill="hsl(var(--card))" stroke="hsl(var(--border))" stroke-width="1" rx="4"/>
        <text x="525" y="48" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Ray Key:</text>
        <line x1="470" y1="58" x2="490" y2="58" stroke="#22c55e" stroke-width="3"/>
        <text x="495" y="62" fill="currentColor" font-size="10">1. Parallel → F</text>
        <line x1="470" y1="73" x2="490" y2="73" stroke="#3b82f6" stroke-width="3"/>
        <text x="495" y="77" fill="currentColor" font-size="10">2. Through centre</text>
        <line x1="470" y1="88" x2="490" y2="88" stroke="#ec4899" stroke-width="3"/>
        <text x="495" y="92" fill="currentColor" font-size="10">3. Through F → parallel</text>
      </svg>
    </div>
  </div>

  <div class="definition-block" style="margin-top: 1rem;">
    <h4>📍 What Happens Depends on Object Position:</h4>
    <table class="data-table">
      <thead><tr><th>Object Position</th><th>Image Properties</th></tr></thead>
      <tbody>
        <tr><td><strong>Beyond 2F</strong></td><td>Real, inverted, smaller</td></tr>
        <tr><td><strong>At 2F</strong></td><td>Real, inverted, same size (forms at 2F on other side)</td></tr>
        <tr><td><strong>Between F and 2F</strong></td><td>Real, inverted, larger (magnified)</td></tr>
        <tr><td><strong>Inside F</strong></td><td>Virtual, upright, magnified (magnifying glass)</td></tr>
      </tbody>
    </table>
  </div>
</div>
          `,
          canonical_keywords: ["ray diagram", "convex lens", "parallel", "principal focus", "centre", "real image", "inverted", "2F"],
          practice_items: [
            {
              id: "p3-1",
              prompt_template: "Describe the three key rays used to draw a ray diagram for a convex lens. What determines the properties of the image?",
              marks: 6,
              type: "short-answer",
              difficulty: "hard",
              randomise: true,
              expected_keywords: ["parallel", "principal focus", "centre", "straight through", "2F", "real", "virtual", "inverted", "upright"]
            }
          ]
        },
        {
          id: "4-6-2-5-ray-diagrams-concave",
          title: "Ray Diagrams: Concave Lens",
          pair_title: "Pair 3: Ray Diagrams",
          type: "content",
          study_group: 3,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Ray Diagrams: Concave Lens</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Concave lenses behave much more simply — the image properties are <strong>always the same</strong>.</p>
  </div>

  <div class="definition-block">
    <h4>🔑 Two Main Rays:</h4>
    <ol>
      <li><strong>Ray 1:</strong> A ray parallel to the axis → refracts as if coming from the virtual focus behind the lens</li>
      <li><strong>Ray 2:</strong> A ray through the centre → continues straight through</li>
    </ol>
  </div>

  <div class="definition-block" style="margin-top: 1rem; border-left: 4px solid #ec4899;">
    <h4>📋 Image Properties (Always the Same):</h4>
    <ul>
      <li><strong>Virtual</strong> (rays don't actually meet)</li>
      <li><strong>Upright</strong> (same way up as object)</li>
      <li><strong>Smaller</strong> (diminished)</li>
      <li>Appears on the <strong>same side</strong> of the lens as the object</li>
    </ul>
  </div>

  <!-- Concave lens ray diagram -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; background: hsl(330, 100%, 97%);">
    <h4 style="color: #be185d;">Concave Lens Ray Diagram (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="550" height="250" viewBox="0 0 550 250">
        <!-- Principal axis -->
        <line x1="30" y1="125" x2="520" y2="125" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        
        <!-- Concave lens -->
        <path d="M260 55 Q290 125 260 195" fill="none" stroke="#ec4899" stroke-width="2.5"/>
        <path d="M290 55 Q260 125 290 195" fill="none" stroke="#ec4899" stroke-width="2.5"/>
        <line x1="260" y1="55" x2="290" y2="55" stroke="#ec4899" stroke-width="2.5"/>
        <line x1="260" y1="195" x2="290" y2="195" stroke="#ec4899" stroke-width="2.5"/>
        <rect x="260" y="55" width="30" height="140" fill="hsl(330, 100%, 95%)"/>
        
        <!-- F markers -->
        <circle cx="200" cy="125" r="5" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="200" y="150" fill="#ef4444" font-size="11" text-anchor="middle">F (virtual)</text>
        <circle cx="350" cy="125" r="5" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="3,3"/>
        <text x="350" y="150" fill="#ef4444" font-size="11" text-anchor="middle">F</text>
        
        <!-- OBJECT -->
        <line x1="130" y1="125" x2="130" y2="55" stroke="#f97316" stroke-width="4"/>
        <polygon points="130,55 123,70 137,70" fill="#f97316"/>
        <text x="130" y="175" fill="#f97316" font-size="12" font-weight="bold" text-anchor="middle">Object</text>
        
        <!-- RAY 1: Parallel → diverges as if from virtual F -->
        <line x1="130" y1="55" x2="260" y2="55" stroke="#22c55e" stroke-width="3">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <!-- Diverging ray after lens -->
        <line x1="290" y1="55" x2="480" y2="20" stroke="#22c55e" stroke-width="3">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <!-- Traced back to virtual F (dashed) -->
        <line x1="290" y1="55" x2="200" y2="125" stroke="#22c55e" stroke-width="2" stroke-dasharray="5,4" opacity="0.6"/>
        
        <!-- RAY 2: Through centre -->
        <line x1="130" y1="55" x2="480" y2="145" stroke="#3b82f6" stroke-width="3">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- VIRTUAL IMAGE (where traced-back rays appear to meet) -->
        <line x1="175" y1="125" x2="175" y2="95" stroke="#22c55e" stroke-width="3" stroke-dasharray="4,3"/>
        <polygon points="175,95 168,105 182,105" fill="#22c55e" opacity="0.7"/>
        <text x="175" y="210" fill="#22c55e" font-size="11" text-anchor="middle">Virtual Image</text>
        <text x="175" y="223" fill="#22c55e" font-size="10" text-anchor="middle">(smaller, upright)</text>
        
        <!-- Properties box -->
        <rect x="400" y="160" width="130" height="70" fill="hsl(var(--card))" stroke="hsl(var(--border))" stroke-width="1" rx="4"/>
        <text x="465" y="178" fill="currentColor" font-size="11" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="415" y="195" fill="#22c55e" font-size="10">✓ Virtual</text>
        <text x="415" y="210" fill="#22c55e" font-size="10">✓ Upright</text>
        <text x="415" y="225" fill="#22c55e" font-size="10">✓ Smaller (diminished)</text>
      </svg>
    </div>
  </div>
</div>
          `,
          canonical_keywords: ["concave lens", "ray diagram", "virtual image", "upright", "diminished", "diverge"],
          practice_items: [
            {
              id: "p3-2",
              prompt_template: "Describe how to draw a ray diagram for a concave lens and explain the properties of the image formed.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["parallel", "virtual focus", "centre", "virtual", "upright", "smaller", "diminished"]
            }
          ]
        },
        // PAIR 4: Object Positions & Magnification
        {
          id: "4-6-2-5-object-positions",
          title: "Object Positions: Between F and 2F, Inside F",
          pair_title: "Pair 4: Magnification & Positions",
          type: "content",
          study_group: 4,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Object Position Effects on Image</h3>
  
  <!-- Object Between F and 2F -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; background: hsl(270, 100%, 97%); border-left: 4px solid #8b5cf6;">
    <h4 style="color: #7c3aed;">Object Between F and 2F (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="550" height="220" viewBox="0 0 550 220">
        <!-- Principal axis -->
        <line x1="30" y1="110" x2="520" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        
        <!-- Convex lens -->
        <ellipse cx="230" cy="110" rx="10" ry="60" fill="hsl(210, 100%, 90%)" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- 2F and F markers -->
        <circle cx="110" cy="110" r="4" fill="#8b5cf6"/>
        <text x="110" y="135" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">2F</text>
        <circle cx="170" cy="110" r="4" fill="#ef4444"/>
        <text x="170" y="135" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="290" cy="110" r="4" fill="#ef4444"/>
        <text x="290" y="135" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="350" cy="110" r="4" fill="#8b5cf6"/>
        <text x="350" y="135" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- Object (between F and 2F) -->
        <line x1="145" y1="110" x2="145" y2="50" stroke="#f97316" stroke-width="4"/>
        <polygon points="145,50 138,65 152,65" fill="#f97316"/>
        <text x="145" y="165" fill="#f97316" font-size="11" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- Ray 1: Parallel → through F -->
        <line x1="145" y1="50" x2="220" y2="50" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="240" y1="50" x2="430" y2="175" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Ray 2: Through centre -->
        <line x1="145" y1="50" x2="430" y2="175" stroke="#3b82f6" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Image (real, inverted, magnified, beyond 2F) -->
        <line x1="430" y1="110" x2="430" y2="175" stroke="#8b5cf6" stroke-width="4"/>
        <polygon points="430,175 423,160 437,160" fill="#8b5cf6"/>
        <text x="430" y="195" fill="#8b5cf6" font-size="11" text-anchor="middle" font-weight="bold">Image</text>
        
        <!-- Properties box -->
        <rect x="430" y="25" width="105" height="65" fill="hsl(var(--card))" stroke="hsl(var(--border))" stroke-width="1" rx="4"/>
        <text x="482" y="43" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="440" y="58" fill="#22c55e" font-size="9">✓ Real</text>
        <text x="440" y="71" fill="#22c55e" font-size="9">✓ Inverted</text>
        <text x="440" y="84" fill="#22c55e" font-size="9">✓ Magnified</text>
      </svg>
    </div>
  </div>

  <!-- Object Inside F - Magnifying Glass -->
  <div class="key-idea-block anim-pause-hover" style="padding: 1rem; margin: 1rem 0; background: hsl(40, 100%, 96%); border-left: 4px solid #f59e0b;">
    <h4 style="color: #d97706;">Object Inside F - Magnifying Glass Effect (hover to pause)</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="550" height="220" viewBox="0 0 550 220">
        <!-- Principal axis -->
        <line x1="30" y1="110" x2="520" y2="110" stroke="currentColor" stroke-width="1" stroke-dasharray="4,4" opacity="0.4"/>
        
        <!-- Convex lens (positioned more centrally) -->
        <ellipse cx="280" cy="110" rx="10" ry="60" fill="hsl(210, 100%, 90%)" stroke="#3b82f6" stroke-width="2"/>
        
        <!-- 2F and F markers -->
        <circle cx="160" cy="110" r="4" fill="#8b5cf6"/>
        <text x="160" y="135" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">2F</text>
        <circle cx="220" cy="110" r="4" fill="#ef4444"/>
        <text x="220" y="135" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="340" cy="110" r="4" fill="#ef4444"/>
        <text x="340" y="135" fill="#ef4444" font-size="10" text-anchor="middle" font-weight="bold">F</text>
        <circle cx="400" cy="110" r="4" fill="#8b5cf6"/>
        <text x="400" y="135" fill="#8b5cf6" font-size="10" text-anchor="middle" font-weight="bold">2F</text>
        
        <!-- Object (between lens and F - inside focal length) -->
        <line x1="250" y1="110" x2="250" y2="70" stroke="#f97316" stroke-width="4"/>
        <polygon points="250,70 243,82 257,82" fill="#f97316"/>
        <text x="250" y="170" fill="#f97316" font-size="10" text-anchor="middle" font-weight="bold">Object</text>
        
        <!-- Ray 1: Parallel → through F (but object inside F) -->
        <line x1="250" y1="70" x2="270" y2="70" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        <line x1="290" y1="70" x2="480" y2="145" stroke="#22c55e" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Ray 2: Through centre -->
        <line x1="250" y1="70" x2="440" y2="125" stroke="#3b82f6" stroke-width="2.5">
          <animate attributeName="stroke-dashoffset" from="40" to="0" dur="2s" repeatCount="indefinite"/>
        </line>
        
        <!-- Traced back (dashed) - rays diverge so trace back to find virtual image -->
        <line x1="290" y1="70" x2="100" y2="25" stroke="#22c55e" stroke-width="2" stroke-dasharray="5,4" opacity="0.6"/>
        <line x1="280" y1="74" x2="100" y2="25" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,4" opacity="0.6"/>
        
        <!-- Virtual Image (same side as object, magnified, upright) -->
        <line x1="100" y1="110" x2="100" y2="25" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5,4"/>
        <polygon points="100,25 93,40 107,40" fill="#f59e0b" opacity="0.8"/>
        <text x="65" y="70" fill="#f59e0b" font-size="10" font-weight="bold">Virtual Image</text>
        <text x="65" y="83" fill="#f59e0b" font-size="9">(Magnified)</text>
        
        <!-- Magnifying glass note -->
        <text x="420" y="30" fill="#d97706" font-size="10">🔍 This is how</text>
        <text x="420" y="44" fill="#d97706" font-size="10" font-weight="bold">magnifying glasses work!</text>
        
        <!-- Properties box -->
        <rect x="430" y="150" width="105" height="60" fill="hsl(var(--card))" stroke="hsl(var(--border))" stroke-width="1" rx="4"/>
        <text x="482" y="168" fill="currentColor" font-size="10" text-anchor="middle" font-weight="bold">Properties:</text>
        <text x="440" y="183" fill="#22c55e" font-size="9">✓ Virtual</text>
        <text x="440" y="196" fill="#22c55e" font-size="9">✓ Upright</text>
        <text x="440" y="209" fill="#22c55e" font-size="9">✓ Magnified</text>
      </svg>
    </div>
  </div>

  <div class="exam-tip-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>💡 Exam Tip:</h4>
    <p>When the object is <strong>inside F</strong>, the rays diverge after passing through the lens. You must trace them <strong>backwards</strong> to find where the virtual image appears.</p>
  </div>
</div>
          `,
          canonical_keywords: ["object position", "between F and 2F", "inside F", "magnified", "real", "virtual", "magnifying glass"],
          practice_items: [
            {
              id: "p4-1",
              prompt_template: "Explain what happens to the image when an object is placed between F and 2F, and when it is placed inside F.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["between F and 2F", "real", "inverted", "magnified", "inside F", "virtual", "upright", "magnifying glass"]
            }
          ]
        },
        {
          id: "4-6-2-5-magnification",
          title: "Magnification",
          pair_title: "Pair 4: Magnification & Positions",
          type: "content",
          study_group: 4,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 7 – Magnification</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Magnification tells you how much bigger or smaller an image is compared to the object.</p>
  </div>

  <div class="definition-block">
    <h4>📐 Magnification Equation:</h4>
    <p class="highlight-box" style="font-size: 1.3rem; text-align: center; padding: 1rem; background: hsl(var(--primary)/0.1); border-radius: 8px;">
      <strong>Magnification = image height ÷ object height</strong>
    </p>
    <ul style="margin-top: 1rem;">
      <li><strong>No units</strong> — it is a ratio</li>
      <li>Works for <strong>both convex and concave lenses</strong></li>
      <li>Both heights must be measured in the <strong>same units</strong> (mm, cm, etc.)</li>
    </ul>
  </div>

  <div class="definition-block" style="margin-top: 1rem;">
    <h4>🔍 Interpretation:</h4>
    <table class="data-table">
      <thead><tr><th>Magnification Value</th><th>Meaning</th></tr></thead>
      <tbody>
        <tr><td><strong>> 1</strong></td><td>Image is <strong>magnified</strong> (larger)</td></tr>
        <tr><td><strong>= 1</strong></td><td>Image is <strong>same size</strong></td></tr>
        <tr><td><strong>< 1</strong></td><td>Image is <strong>diminished</strong> (smaller)</td></tr>
      </tbody>
    </table>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Why Magnification Works:</h4>
    <p>The lens changes the angles at which rays meet. These angles determine where the image forms and how large it appears.</p>
    <ul>
      <li>If the rays meet at a <strong>larger separation</strong> from the axis, the image height is greater → <strong>magnified</strong></li>
      <li>If they meet <strong>closer together</strong>, the image height is smaller → <strong>diminished</strong></li>
    </ul>
  </div>

  <div class="example-block">
    <h4>📝 Example Calculation:</h4>
    <p>An object is 2 cm tall. The image formed is 6 cm tall.</p>
    <p><strong>Magnification = 6 ÷ 2 = 3</strong></p>
    <p>The image is <strong>3 times larger</strong> than the object.</p>
  </div>
</div>
          `,
          canonical_keywords: ["magnification", "image height", "object height", "ratio", "magnified", "diminished", "same size"],
          practice_items: [
            {
              id: "p4-2",
              prompt_template: "State the equation for magnification and explain what a magnification of 0.5 means.",
              marks: 3,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["magnification", "image height", "object height", "diminished", "smaller", "half"]
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
          pair_title: "Pair 1: Spectrum & Filters",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – The Visible Spectrum</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>💡 Key Idea:</h4>
    <p>The visible light spectrum is the small part of the electromagnetic spectrum that our eyes can detect. Each colour of visible light has its own specific wavelength and frequency.</p>
  </div>

  <div class="definition-block">
    <h4>🌈 Order of Colours (longest → shortest wavelength):</h4>
    <div style="display: flex; justify-content: center; margin: 1rem 0;">
      <svg width="500" height="80" viewBox="0 0 500 80">
        <defs>
          <linearGradient id="spectrumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#ff0000"/>
            <stop offset="16%" style="stop-color:#ff7f00"/>
            <stop offset="33%" style="stop-color:#ffff00"/>
            <stop offset="50%" style="stop-color:#00ff00"/>
            <stop offset="66%" style="stop-color:#0000ff"/>
            <stop offset="83%" style="stop-color:#4b0082"/>
            <stop offset="100%" style="stop-color:#8f00ff"/>
          </linearGradient>
        </defs>
        <rect x="20" y="10" width="460" height="30" fill="url(#spectrumGrad)" rx="4"/>
        <text x="45" y="55" fill="#ef4444" font-size="10" text-anchor="middle">Red</text>
        <text x="105" y="55" fill="#f97316" font-size="10" text-anchor="middle">Orange</text>
        <text x="165" y="55" fill="#eab308" font-size="10" text-anchor="middle">Yellow</text>
        <text x="230" y="55" fill="#22c55e" font-size="10" text-anchor="middle">Green</text>
        <text x="305" y="55" fill="#3b82f6" font-size="10" text-anchor="middle">Blue</text>
        <text x="370" y="55" fill="#6366f1" font-size="10" text-anchor="middle">Indigo</text>
        <text x="440" y="55" fill="#8b5cf6" font-size="10" text-anchor="middle">Violet</text>
        <text x="40" y="70" fill="currentColor" font-size="9" opacity="0.7">Long λ, Low f</text>
        <text x="460" y="70" fill="currentColor" font-size="9" text-anchor="end" opacity="0.7">Short λ, High f</text>
      </svg>
    </div>
  </div>

  <div class="exam-tip-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Remember:</h4>
    <p>As wavelength <strong>decreases</strong>, frequency <strong>increases</strong>. Violet has the highest frequency (most energy), while red has the lowest frequency.</p>
    <p>Understanding this helps explain how objects absorb or reflect specific colours.</p>
  </div>
</div>
          `,
          canonical_keywords: ["visible spectrum", "wavelength", "frequency", "red", "violet", "colour", "electromagnetic"],
          practice_items: [
            {
              id: "p1-1",
              prompt_template: "List the colours of the visible spectrum in order from longest to shortest wavelength. Which colour has the highest frequency?",
              marks: 3,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "frequency", "wavelength"]
            }
          ]
        },
        {
          id: "4-6-2-6-colour-filters",
          title: "How Colour Filters Work",
          pair_title: "Pair 1: Spectrum & Filters",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – How Colour Filters Work</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🎨 Key Idea:</h4>
    <p>Colour filters control which colours pass through and which are absorbed.</p>
  </div>

  <div class="definition-block">
    <h4>How Filters Behave:</h4>
    <ul>
      <li>A <strong style="color:#ef4444">red filter</strong> transmits red light only and absorbs all other colours</li>
      <li>A <strong style="color:#22c55e">green filter</strong> transmits green light only</li>
      <li>A <strong style="color:#3b82f6">blue filter</strong> transmits blue light only</li>
      <li>A <strong style="color:#eab308">yellow filter</strong> transmits red + green wavelengths (because yellow = red + green light)</li>
    </ul>
  </div>

  <div class="exam-tip-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Idea:</h4>
    <p>Filters <strong>don't add colour</strong> — they <strong>remove</strong> certain wavelengths by absorbing them, allowing only selected wavelengths to pass.</p>
    <p>So if you shine white light through a red filter, the output becomes red because all non-red wavelengths were absorbed.</p>
  </div>

  <!-- Filter diagram -->
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>How a Red Filter Works:</h4>
    <div style="display: flex; justify-content: center; padding: 0.5rem;">
      <svg width="400" height="120" viewBox="0 0 400 120">
        <!-- White light -->
        <text x="40" y="20" fill="currentColor" font-size="11" text-anchor="middle">White light</text>
        <rect x="20" y="30" width="50" height="60" fill="white" stroke="currentColor" stroke-width="1"/>
        <line x1="70" y1="40" x2="140" y2="40" stroke="#ef4444" stroke-width="2"/>
        <line x1="70" y1="50" x2="140" y2="50" stroke="#22c55e" stroke-width="2"/>
        <line x1="70" y1="60" x2="140" y2="60" stroke="#3b82f6" stroke-width="2"/>
        <line x1="70" y1="70" x2="140" y2="70" stroke="#eab308" stroke-width="2"/>
        <line x1="70" y1="80" x2="140" y2="80" stroke="#8b5cf6" stroke-width="2"/>
        
        <!-- Red filter -->
        <rect x="140" y="30" width="30" height="60" fill="#ef4444" opacity="0.6" stroke="#ef4444" stroke-width="2"/>
        <text x="155" y="105" fill="#ef4444" font-size="10" text-anchor="middle">Red filter</text>
        
        <!-- Only red passes -->
        <line x1="170" y1="40" x2="280" y2="40" stroke="#ef4444" stroke-width="3"/>
        
        <!-- Absorbed wavelengths (X marks) -->
        <text x="185" y="54" fill="currentColor" font-size="12" opacity="0.5">✗</text>
        <text x="185" y="64" fill="currentColor" font-size="12" opacity="0.5">✗</text>
        <text x="185" y="74" fill="currentColor" font-size="12" opacity="0.5">✗</text>
        <text x="185" y="84" fill="currentColor" font-size="12" opacity="0.5">✗</text>
        
        <!-- Output -->
        <rect x="280" y="30" width="50" height="60" fill="#ef4444" stroke="#ef4444" stroke-width="2"/>
        <text x="305" y="105" fill="#ef4444" font-size="11" text-anchor="middle" font-weight="bold">Red light only</text>
      </svg>
    </div>
  </div>
</div>
          `,
          canonical_keywords: ["colour filter", "transmit", "absorb", "wavelength", "red filter", "green filter", "blue filter"],
          practice_items: [
            {
              id: "p1-2",
              prompt_template: "Explain how a colour filter works. What happens when white light passes through a green filter?",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["absorb", "transmit", "green", "wavelengths", "filter"]
            }
          ]
        },
        // PAIR 2: Why Objects Have Colour & Transparent/Translucent/Opaque
        {
          id: "4-6-2-6-object-colour",
          title: "Why Objects Have Colour",
          pair_title: "Pair 2: Object Colour & Properties",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Why Objects Have Colour</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>An object's colour depends on which wavelengths it <strong>reflects</strong> and which it <strong>absorbs</strong>.</p>
  </div>

  <div class="definition-block">
    <h4>✔ Opaque Objects (objects you cannot see through):</h4>
    <ul>
      <li>They <strong>absorb</strong> some wavelengths</li>
      <li>They <strong>reflect</strong> the wavelengths you see</li>
    </ul>
  </div>

  <div class="example-block">
    <h4>Examples:</h4>
    <ul>
      <li>A <strong style="color:#ef4444">red apple</strong> absorbs all colours except red → reflects red wavelengths</li>
      <li>A <strong style="color:#22c55e">green leaf</strong> absorbs all colours except green → reflects green wavelengths</li>
      <li>A <strong>white object</strong> reflects all wavelengths</li>
      <li>A <strong>black object</strong> absorbs all wavelengths (reflects none)</li>
    </ul>
  </div>

  <div class="exam-tip-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Important Rule:</h4>
    <p>The colour you see depends on: <strong>1) what wavelengths hit the object</strong>, and <strong>2) what wavelengths the object reflects</strong>.</p>
  </div>

  <div class="definition-block" style="margin-top: 1rem;">
    <h4>Special Colours (Mixing Primary Light Colours):</h4>
    <ul>
      <li><strong style="color:#8b5cf6">Purple/Magenta object</strong>: reflects red + blue wavelengths, absorbs others</li>
      <li><strong style="color:#06b6d4">Cyan object</strong>: reflects green + blue wavelengths</li>
      <li><strong style="color:#eab308">Yellow object</strong>: reflects red + green wavelengths</li>
    </ul>
    <p>🧠 Your brain interprets the mixture of reflected wavelengths as the object's final colour.</p>
  </div>
</div>
          `,
          canonical_keywords: ["colour", "reflect", "absorb", "wavelength", "opaque", "white", "black"],
          practice_items: [
            {
              id: "p2-1",
              prompt_template: "Explain why a red object appears red under white light. What happens to the other colours?",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["reflect", "red", "absorb", "wavelengths", "white light"]
            }
          ]
        },
        {
          id: "4-6-2-6-transparent-translucent-opaque",
          title: "Transparent, Translucent, and Opaque",
          pair_title: "Pair 2: Object Colour & Properties",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – Transparent, Translucent, and Opaque Objects</h3>
  
  <div class="definition-block" style="border-left: 4px solid #3b82f6;">
    <h4>🔵 Transparent Objects:</h4>
    <ul>
      <li><strong>Transmit most</strong> of the light that hits them</li>
      <li>Allow you to <strong>see clearly</strong> through them</li>
      <li>Example: <strong>clear glass</strong>, water</li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #06b6d4; margin-top: 1rem;">
    <h4>🔷 Translucent Objects:</h4>
    <ul>
      <li><strong>Transmit some</strong> light</li>
      <li><strong>Scatter</strong> the rest</li>
      <li>You can see <strong>shapes but not clear images</strong></li>
      <li>Example: <strong>frosted glass</strong>, tracing paper</li>
    </ul>
  </div>

  <div class="definition-block" style="border-left: 4px solid #1f2937; margin-top: 1rem;">
    <h4>⚫ Opaque Objects:</h4>
    <ul>
      <li><strong>Transmit no light</strong></li>
      <li>Either <strong>reflect or absorb</strong> all incoming wavelengths</li>
      <li>Example: <strong>wood, metal, book covers</strong></li>
    </ul>
  </div>

  <div class="exam-tip-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Point:</h4>
    <p>This classification affects how objects appear under different lighting conditions.</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Type</th><th>Light Behaviour</th><th>Can See Through?</th><th>Example</th></tr></thead>
    <tbody>
      <tr><td>Transparent</td><td>Transmits most light</td><td>Yes, clearly</td><td>Clear glass</td></tr>
      <tr><td>Translucent</td><td>Transmits some, scatters rest</td><td>Blurry shapes only</td><td>Frosted glass</td></tr>
      <tr><td>Opaque</td><td>Absorbs/reflects all</td><td>No</td><td>Wood, metal</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["transparent", "translucent", "opaque", "transmit", "absorb", "scatter", "light"],
          practice_items: [
            {
              id: "p2-2",
              prompt_template: "Define transparent, translucent, and opaque materials. Give an example of each.",
              marks: 4,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["transparent", "translucent", "opaque", "transmit", "scatter", "absorb"]
            }
          ]
        },
        // PAIR 3: Filters & Objects, Absorption/Transmission/Reflection
        {
          id: "4-6-2-6-filters-affect-objects",
          title: "How Filters Affect Object Appearance",
          pair_title: "Pair 3: Filters & Light Interactions",
          type: "content",
          study_group: 3,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 5 – How Filters Affect the Appearance of Objects</h3>
  
  <div class="example-block" style="border-left: 4px solid #ef4444;">
    <h4>Example 1: 🔴 A red object under a red filter</h4>
    <p>The object <strong>appears red</strong>, because the filter allows red light to pass and the object reflects red light.</p>
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

  <div class="exam-tip-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Important Understanding:</h4>
    <p>The colour you see depends on:</p>
    <ol>
      <li>The <strong>colour of the object</strong> (what it reflects)</li>
      <li>Which <strong>wavelengths the filter allows</strong> to reach it</li>
    </ol>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Object Colour</th><th>Filter Colour</th><th>Appearance</th></tr></thead>
    <tbody>
      <tr><td>Red</td><td>Red</td><td>Red</td></tr>
      <tr><td>Blue</td><td>Red</td><td>Black</td></tr>
      <tr><td>Green</td><td>Green</td><td>Green</td></tr>
      <tr><td>Yellow</td><td>Blue</td><td>Black</td></tr>
      <tr><td>White</td><td>Any colour</td><td>Filter colour</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["filter", "object colour", "absorb", "transmit", "reflect", "black", "appearance"],
          practice_items: [
            {
              id: "p3-1",
              prompt_template: "A green object is viewed through a red filter. What colour will it appear and why?",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["black", "dark", "red filter", "absorb", "green", "no light"]
            }
          ]
        },
        {
          id: "4-6-2-6-absorption-transmission-reflection",
          title: "Absorption, Transmission, and Reflection",
          pair_title: "Pair 3: Filters & Light Interactions",
          type: "content",
          study_group: 3,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 6 – Differential Absorption, Transmission, and Reflection</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Objects interact with light in <strong>three ways</strong>:</p>
  </div>

  <div class="definition-block" style="border-left: 4px solid #ef4444;">
    <h4>1. Absorption</h4>
    <p>The surface takes in specific wavelengths → converts them into <strong>heat</strong>.</p>
    <p><strong>Black surfaces absorb the most energy.</strong></p>
  </div>

  <div class="definition-block" style="border-left: 4px solid #3b82f6; margin-top: 1rem;">
    <h4>2. Transmission</h4>
    <p>Light <strong>passes through</strong> the material (as in transparent or translucent objects).</p>
  </div>

  <div class="definition-block" style="border-left: 4px solid #22c55e; margin-top: 1rem;">
    <h4>3. Reflection</h4>
    <p>Light <strong>bounces off</strong> the surface back towards the observer.</p>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>How This Links to Colour:</h4>
    <p>The balance of absorption, transmission, and reflection determines what colour we perceive.</p>
  </div>

  <div class="definition-block" style="margin-top: 1rem;">
    <h4>Subsection 7 – Why an Opaque Object Has a Particular Colour</h4>
    <ol>
      <li><strong>White light</strong> (a mix of all colours) hits the object</li>
      <li>The object's surface <strong>absorbs some wavelengths</strong></li>
      <li>The wavelengths that are <strong>not absorbed are reflected</strong></li>
      <li>The reflected wavelengths enter your eyes → your brain interprets them as the object's colour</li>
    </ol>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Light Interaction</th><th>What Happens</th><th>Effect on Colour</th></tr></thead>
    <tbody>
      <tr><td>Absorption</td><td>Light energy converted to heat</td><td>Those colours not seen</td></tr>
      <tr><td>Transmission</td><td>Light passes through</td><td>Object appears transparent</td></tr>
      <tr><td>Reflection</td><td>Light bounces off surface</td><td>Those colours are seen</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["absorption", "transmission", "reflection", "heat", "wavelengths", "colour", "opaque"],
          practice_items: [
            {
              id: "p3-2",
              prompt_template: "Explain the three ways light can interact with an object. How do these determine what colour we see?",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["absorption", "transmission", "reflection", "wavelengths", "heat", "colour"]
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
          title: "All Objects Emit and Absorb Infrared Radiation",
          pair_title: "Pair 1: IR Emission Basics",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – All Objects Emit and Absorb Infrared Radiation</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Every object above <strong>absolute zero</strong> emits electromagnetic radiation, mostly in the <strong>infrared (IR)</strong> part of the spectrum.</p>
    <p>This includes everyday objects such as the ground, your body, cars, houses, and even ice.</p>
  </div>

  <div class="definition-block">
    <h4>🔑 Key Idea:</h4>
    <p>The <strong>hotter</strong> an object is, the <strong>more infrared radiation</strong> it emits in a given time.</p>
    <p>This is why hot objects glow faintly red in the dark — they are emitting large amounts of IR, some of which enters the visible range.</p>
  </div>
</div>
          `,
          canonical_keywords: ["infrared radiation", "emit", "absorb", "temperature", "absolute zero", "hot", "electromagnetic"],
          practice_items: [
            {
              id: "p1-1",
              prompt_template: "Explain why all objects emit infrared radiation. What determines how much IR an object emits?",
              marks: 3,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["infrared", "temperature", "hotter", "emit", "electromagnetic"]
            }
          ]
        },
        {
          id: "4-6-3-1-temperature-emission",
          title: "Temperature and Radiation Emission",
          pair_title: "Pair 1: IR Emission Basics",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Temperature and Radiation Emission</h3>
  
  <div class="definition-block">
    <h4>The Link Between Temperature and Radiation Emission:</h4>
    <p>As an object gets hotter:</p>
    <ul>
      <li><strong>Total energy emitted increases</strong></li>
      <li>Radiation becomes <strong>more intense</strong></li>
      <li>The <strong>peak wavelength</strong> of radiation becomes <strong>shorter</strong> (shifts towards visible light)</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>This explains why very hot metals glow <strong>red</strong>, then <strong>orange</strong>, then <strong>white</strong> — hotter surfaces emit shorter wavelengths.</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Temperature</th><th>Energy Emitted</th><th>Peak Wavelength</th><th>Visible Effect</th></tr></thead>
    <tbody>
      <tr><td>Low (cold)</td><td>Low</td><td>Long (far IR)</td><td>No glow</td></tr>
      <tr><td>Medium (warm)</td><td>Medium</td><td>Medium (near IR)</td><td>Faint red glow</td></tr>
      <tr><td>High (hot)</td><td>High</td><td>Short (visible)</td><td>Red → orange → white</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["temperature", "radiation emission", "intensity", "wavelength", "peak wavelength", "glow", "hot"],
          practice_items: [
            {
              id: "p1-2",
              prompt_template: "Describe how the radiation emitted by an object changes as its temperature increases.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["temperature", "energy", "intensity", "wavelength", "shorter", "visible"]
            }
          ]
        },
        // PAIR 2: Absorption of IR & Surface Types
        {
          id: "4-6-3-1-absorption",
          title: "Absorption of Infrared Radiation",
          pair_title: "Pair 2: Absorption & Surfaces",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Absorption of Infrared Radiation</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Objects <strong>absorb</strong> infrared radiation from their surroundings. The temperature of a body changes depending on how much IR it <strong>absorbs</strong> compared to how much it <strong>emits</strong>.</p>
  </div>

  <div class="definition-block" style="border-left: 4px solid #ef4444;">
    <h4>If absorption > emission:</h4>
    <p>→ The object <strong>heats up</strong></p>
  </div>

  <div class="definition-block" style="border-left: 4px solid #3b82f6; margin-top: 1rem;">
    <h4>If emission > absorption:</h4>
    <p>→ The object <strong>cools down</strong></p>
  </div>

  <div class="definition-block" style="margin-top: 1rem;">
    <h4>📋 Surface Type Matters:</h4>
    <ul>
      <li><strong>Black, matte surfaces</strong> absorb AND emit IR radiation <strong>most effectively</strong></li>
      <li><strong>White or shiny surfaces</strong> absorb and emit the <strong>least</strong></li>
    </ul>
  </div>

  <div class="example-block">
    <h4>This is why:</h4>
    <ul>
      <li><strong>Solar panels are black</strong> (to absorb more radiation)</li>
      <li><strong>Survival blankets are shiny silver</strong> (to reduce heat emission and reflect body heat back)</li>
    </ul>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Surface Type</th><th>Absorption</th><th>Emission</th><th>Example Use</th></tr></thead>
    <tbody>
      <tr><td>Black, matte</td><td>Best</td><td>Best</td><td>Solar panels</td></tr>
      <tr><td>White, shiny</td><td>Worst</td><td>Worst</td><td>Survival blankets, radiators painted white</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["absorption", "emission", "infrared", "temperature", "black", "matte", "shiny", "surface"],
          practice_items: [
            {
              id: "p2-1",
              prompt_template: "Explain how surface colour and texture affect the absorption and emission of infrared radiation.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["black", "matte", "absorb", "emit", "shiny", "white", "infrared"]
            }
          ]
        },
        {
          id: "4-6-3-1-perfect-black-body-intro",
          title: "What Is a Perfect Black Body?",
          pair_title: "Pair 2: Absorption & Surfaces",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – What Is a Perfect Black Body?</h3>
  
  <div class="definition-block">
    <h4>Definition:</h4>
    <p>A <strong>perfect black body</strong> is an idealised object that:</p>
    <ul>
      <li><strong>Absorbs all radiation</strong> that hits it (no reflection, no transmission)</li>
      <li><strong>Emits radiation as effectively as possible</strong> for its temperature</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Understanding:</h4>
    <p>Because it absorbs all wavelengths equally, a perfect black body is also the <strong>best possible emitter</strong> of radiation.</p>
    <p>Real objects try to imitate this behaviour but none achieve true perfection.</p>
  </div>

  <table class="data-table" style="margin: 1rem 0;">
    <thead><tr><th>Property</th><th>Perfect Black Body</th><th>Real Objects</th></tr></thead>
    <tbody>
      <tr><td>Absorption</td><td>100% of all wavelengths</td><td>Less than 100%</td></tr>
      <tr><td>Reflection</td><td>0%</td><td>Some reflection</td></tr>
      <tr><td>Emission efficiency</td><td>Maximum for temperature</td><td>Less than maximum</td></tr>
    </tbody>
  </table>
</div>
          `,
          canonical_keywords: ["perfect black body", "absorb", "emit", "radiation", "idealised", "temperature", "wavelength"],
          practice_items: [
            {
              id: "p2-2",
              prompt_template: "Define a perfect black body and explain why it is both a good absorber and emitter of radiation.",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["perfect black body", "absorb", "emit", "all radiation", "wavelengths", "temperature"]
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
        // PAIR 1: All Bodies Emit Radiation & Temperature Effects
        {
          id: "4-6-3-2-all-bodies-emit",
          title: "All Bodies Emit Radiation",
          pair_title: "Pair 1: Emission & Temperature",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 1 – All Bodies Emit Radiation</h3>
  
  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <p>Every object radiates energy as <strong>electromagnetic waves</strong>. This radiation includes a range of wavelengths, and the exact mix depends on the object's <strong>temperature</strong>.</p>
  </div>

  <div class="definition-block">
    <h4>🔑 Key Principle:</h4>
    <p>Even objects that feel <strong>cold to touch</strong> are still emitting radiation — just <strong>less</strong> than hotter objects.</p>
  </div>
</div>
          `,
          canonical_keywords: ["radiation", "emit", "electromagnetic waves", "temperature", "wavelength", "energy"],
          practice_items: [
            {
              id: "p1-1",
              prompt_template: "Explain why even cold objects emit radiation.",
              marks: 2,
              type: "short-answer",
              difficulty: "easy",
              randomise: true,
              expected_keywords: ["all objects", "emit", "radiation", "temperature", "less"]
            }
          ]
        },
        {
          id: "4-6-3-2-temperature-wavelength",
          title: "Temperature Determines Intensity and Wavelength",
          pair_title: "Pair 1: Emission & Temperature",
          type: "content",
          study_group: 1,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 2 – Temperature Determines Intensity and Wavelength Distribution</h3>
  
  <div class="definition-block">
    <h4>When an Object Becomes Hotter:</h4>
    <ul>
      <li>It emits <strong>more radiation per second</strong></li>
      <li>The wavelengths emitted <strong>shift towards the shorter end</strong> of the spectrum</li>
      <li>Radiation becomes <strong>more intense overall</strong></li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Understanding:</h4>
    <p>A hotter object does not just emit <strong>more</strong> radiation — it emits <strong>different</strong> radiation.</p>
  </div>

  <div class="example-block">
    <h4>Example:</h4>
    <p>A piece of metal heated in a furnace:</p>
    <ul>
      <li>At <strong>low temperature</strong>: emits infrared (invisible)</li>
      <li>As it <strong>heats up</strong>: starts to glow <strong>dull red</strong></li>
      <li>At <strong>higher temperature</strong>: glows <strong>orange</strong>, then <strong>yellow</strong></li>
      <li>At <strong>very high temperature</strong>: glows <strong>white</strong> (emitting all visible wavelengths)</li>
    </ul>
  </div>
</div>
          `,
          canonical_keywords: ["temperature", "intensity", "wavelength", "shorter", "radiation", "emit", "spectrum"],
          practice_items: [
            {
              id: "p1-2",
              prompt_template: "Describe how the intensity and wavelength of radiation emitted by an object change as it is heated.",
              marks: 4,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["temperature", "intensity", "wavelength", "shorter", "more radiation", "visible"]
            }
          ]
        },
        // PAIR 2: Thermal Balance & Earth's Temperature
        {
          id: "4-6-3-2-thermal-balance",
          title: "Thermal Balance: Absorption vs Emission",
          pair_title: "Pair 2: Thermal Balance & Earth",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 3 – Thermal Balance: Absorption vs Emission</h3>
  
  <div class="definition-block">
    <h4>Thermal Equilibrium:</h4>
    <p>A body's temperature <strong>remains constant</strong> only if:</p>
    <p class="highlight-box" style="text-align: center; padding: 1rem; background: hsl(var(--primary)/0.1); border-radius: 8px;">
      <strong>Energy absorbed per second = Energy emitted per second</strong>
    </p>
  </div>

  <div class="definition-block" style="border-left: 4px solid #ef4444; margin-top: 1rem;">
    <h4>✔ If a body absorbs radiation faster than it emits:</h4>
    <p>→ Its temperature <strong>increases</strong></p>
  </div>

  <div class="definition-block" style="border-left: 4px solid #3b82f6; margin-top: 1rem;">
    <h4>✔ If a body emits radiation faster than it absorbs:</h4>
    <p>→ Its temperature <strong>decreases</strong></p>
  </div>

  <div class="exam-tip-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Understanding:</h4>
    <p>This balance determines the temperature of any <strong>planet, building, or physical system</strong>.</p>
  </div>
</div>
          `,
          canonical_keywords: ["thermal balance", "absorption", "emission", "temperature", "equilibrium", "constant"],
          practice_items: [
            {
              id: "p2-1",
              prompt_template: "Explain thermal equilibrium in terms of energy absorption and emission.",
              marks: 3,
              type: "short-answer",
              difficulty: "medium",
              randomise: true,
              expected_keywords: ["thermal equilibrium", "absorption", "emission", "equal", "temperature", "constant"]
            }
          ]
        },
        {
          id: "4-6-3-2-earth-temperature",
          title: "The Earth's Temperature and Radiation Balance",
          pair_title: "Pair 2: Thermal Balance & Earth",
          type: "content",
          study_group: 2,
          content_html: `
<div class="subsection">
  <h3 class="subsection-heading">Subsection 4 – The Earth's Temperature and Radiation Balance</h3>
  
  <div class="definition-block">
    <h4>The Earth's Temperature Depends On:</h4>
    <ul>
      <li><strong>Absorption</strong> of radiation from the Sun (mainly visible light and some infrared)</li>
      <li><strong>Emission</strong> of infrared radiation back into space</li>
      <li><strong>Reflection</strong> of incoming radiation by clouds, ice, oceans, and land</li>
      <li>The <strong>atmosphere</strong>, which can trap infrared radiation (<strong>greenhouse effect</strong>)</li>
    </ul>
  </div>

  <div class="key-idea-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>Why Earth's Temperature Stays Relatively Stable:</h4>
    <ul>
      <li>Earth <strong>absorbs solar radiation</strong> during the day</li>
      <li>Earth <strong>emits infrared radiation</strong> continuously</li>
      <li>When these processes <strong>balance</strong>, temperature remains steady</li>
      <li>If the balance changes (e.g., stronger greenhouse effect), Earth warms or cools</li>
    </ul>
  </div>

  <div class="definition-block" style="margin-top: 1rem;">
    <h4>Subsection 5 – Using Diagrams and Data to Explain Temperature Changes</h4>
    <p>Students should be able to interpret:</p>
    <ul>
      <li>✔ <strong>Diagrams</strong> showing: radiation entering Earth's atmosphere, energy reflected by clouds/surface, energy absorbed by ground, infrared emission escaping to space, infrared absorbed by greenhouse gases</li>
      <li>✔ <strong>Data</strong> showing: increases in atmospheric CO₂ → more radiation trapped → higher average temperature, changes in albedo (reflectivity) due to melting ice, temperature graphs over time showing evidence of energy imbalance</li>
    </ul>
  </div>

  <div class="exam-tip-block" style="padding: 1rem; margin: 1rem 0;">
    <h4>🧠 Key Takeaway:</h4>
    <p>The temperature of Earth depends on the <strong>radiation balance</strong> between what is absorbed and what is emitted.</p>
  </div>
</div>
          `,
          canonical_keywords: ["Earth temperature", "radiation balance", "absorption", "emission", "greenhouse effect", "atmosphere", "solar radiation"],
          practice_items: [
            {
              id: "p2-2",
              prompt_template: "Explain how the Earth's temperature is determined by the balance of radiation. What factors can change this balance?",
              marks: 6,
              type: "short-answer",
              difficulty: "hard",
              randomise: true,
              expected_keywords: ["absorption", "emission", "solar radiation", "infrared", "greenhouse effect", "atmosphere", "balance"]
            }
          ]
        }
      ]
    }
  ]
};
