import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { ROLES, STARTUP_STAGES, INDUSTRIES } from '@/constants';
import { X } from 'lucide-react';

interface FilterPanelProps {
  onClose: () => void;
}

export default function FilterPanel({ onClose }: FilterPanelProps) {
  const [filters, setFilters] = useState({
    roles: [] as string[],
    stages: [] as string[],
    industries: [] as string[],
    locationPreference: 'all' as 'nearby' | 'remote' | 'all',
  });

  const toggleArrayItem = (array: string[], item: string) => {
    if (array.includes(item)) {
      return array.filter(i => i !== item);
    }
    return [...array, item];
  };

  const handleApply = () => {
    console.log('Applying filters:', filters);
    onClose();
  };

  const handleClear = () => {
    setFilters({
      roles: [],
      stages: [],
      industries: [],
      locationPreference: 'all',
    });
  };

  return (
    <div className="bg-card rounded-xl border p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-6">
        {/* Location Preference */}
        <div>
          <Label className="mb-3 block">Location Preference</Label>
          <div className="flex gap-2">
            {(['all', 'nearby', 'remote'] as const).map((pref) => (
              <Badge
                key={pref}
                variant={filters.locationPreference === pref ? 'default' : 'outline'}
                className="cursor-pointer capitalize"
                onClick={() => setFilters({ ...filters, locationPreference: pref })}
              >
                {pref === 'all' ? 'All Locations' : pref}
              </Badge>
            ))}
          </div>
        </div>

        {/* Roles */}
        <div>
          <Label className="mb-3 block">Roles</Label>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((role) => (
              <Badge
                key={role}
                variant={filters.roles.includes(role) ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() =>
                  setFilters({
                    ...filters,
                    roles: toggleArrayItem(filters.roles, role),
                  })
                }
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>

        {/* Startup Stages */}
        <div>
          <Label className="mb-3 block">Startup Stage</Label>
          <div className="flex flex-wrap gap-2">
            {STARTUP_STAGES.map((stage) => (
              <Badge
                key={stage}
                variant={filters.stages.includes(stage) ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() =>
                  setFilters({
                    ...filters,
                    stages: toggleArrayItem(filters.stages, stage),
                  })
                }
              >
                {stage}
              </Badge>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <Label className="mb-3 block">Industries</Label>
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
            {INDUSTRIES.map((industry) => (
              <Badge
                key={industry}
                variant={filters.industries.includes(industry) ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() =>
                  setFilters({
                    ...filters,
                    industries: toggleArrayItem(filters.industries, industry),
                  })
                }
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t">
          <Button variant="outline" className="flex-1" onClick={handleClear}>
            Clear All
          </Button>
          <Button className="flex-1 gradient-primary text-white" onClick={handleApply}>
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
